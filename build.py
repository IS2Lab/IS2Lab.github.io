#!/usr/bin/env python3
"""
IS2 Lab site builder.

Reads the markdown files in content/ and regenerates:
    assets/js/i18n.js   (interface text)
    assets/js/data.js   (people, news, research, sponsors)

Usage:
    python3 build.py

You normally do not need to run this by hand: the GitHub Action in
.github/workflows/deploy.yml runs it automatically on every push.
"""
import json
import pathlib
import re
import sys

try:
    import yaml
except ImportError:
    sys.exit("PyYAML is required.  Install it with:  pip install pyyaml")

ROOT = pathlib.Path(__file__).resolve().parent
CONTENT = ROOT / "content"
JS = ROOT / "assets" / "js"

FRONT_MATTER = re.compile(r"^---\s*$(.*?)^---\s*$", re.S | re.M)


def load(name):
    """Read content/<name>.md and return the YAML block inside it."""
    path = CONTENT / name
    if not path.exists():
        sys.exit(f"ERROR: missing content file: content/{name}")
    text = path.read_text(encoding="utf-8")
    match = FRONT_MATTER.search(text)
    if not match:
        sys.exit(f"ERROR: content/{name} has no '---' block. "
                 "The content must sit between two lines containing only ---")
    try:
        parsed = yaml.safe_load(match.group(1))
    except yaml.YAMLError as exc:
        sys.exit(f"ERROR: content/{name} is not valid YAML.\n{exc}")
    if not isinstance(parsed, dict):
        sys.exit(f"ERROR: content/{name} should define named lists (e.g. 'news:').")
    return parsed


def need(entry, field, where):
    if field not in entry or entry[field] in (None, ""):
        sys.exit(f"ERROR in {where}: missing required field '{field}'\n  {entry}")
    return entry[field]


def bilingual(value, where, field):
    """Accept {en: .., zh: ..} or a plain string used for both languages."""
    if isinstance(value, dict):
        en = value.get("en", "")
        zh = value.get("zh", "") or en
        return {"en": en, "zh": zh}
    if isinstance(value, str):
        return {"en": value, "zh": value}
    sys.exit(f"ERROR in {where}: field '{field}' should have en:/zh: values.")


def bilingual_list(value, where, field):
    """Accept {en: [..], zh: [..]} or a plain list used for both languages."""
    if isinstance(value, dict):
        en = value.get("en") or []
        zh = value.get("zh") or en
        return {"en": list(en), "zh": list(zh)}
    if isinstance(value, list):
        return {"en": list(value), "zh": list(value)}
    sys.exit(f"ERROR in {where}: field '{field}' should be a list (or en:/zh: lists).")


def js_file(varname, payload, note):
    return (
        "/* " + note + "\n"
        "   GENERATED FILE — do not edit by hand.\n"
        "   Edit the markdown in content/ and run:  python3 build.py  */\n"
        "window." + varname + " = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    )


# --------------------------------------------------------------- interface
def build_i18n():
    ui = load("ui.md").get("ui")
    if not ui:
        sys.exit("ERROR: content/ui.md must contain a 'ui:' section.")
    en, zh = {}, {}
    for key, value in ui.items():
        pair = bilingual(value, "content/ui.md", key)
        en[key] = pair["en"]
        zh[key] = pair["zh"]
    return {"en": en, "zh": zh}, len(en)


# ------------------------------------------------------------------ people
GROUPS = ["faculty", "postdocs", "phd", "master", "ra"]


def build_team():
    src = load("team.md")
    out, count = {}, 0
    for group in GROUPS:
        people = src.get(group) or []
        rows = []
        for person in people:
            where = f"content/team.md → {group}"
            row = {}
            if person.get("photo"):
                row["photo"] = person["photo"]
            row["name"] = need(person, "name", where)
            if "role" in person:
                row["role"] = bilingual(person["role"], where, "role")
            for key in ("email", "homepage", "url"):
                if person.get(key):
                    row[key] = person[key]
            if person.get("notes"):
                row["edu"] = bilingual_list(person["notes"], where, "notes")
            rows.append(row)
            count += 1
        out[group] = rows

    alumni = []
    for person in src.get("alumni") or []:
        where = "content/team.md → alumni"
        alumni.append({
            "who": need(person, "name", where),
            "role": bilingual(person.get("role", ""), where, "role"),
            "where": bilingual(person.get("now", ""), where, "now"),
        })
        count += 1
    out["alumni"] = alumni
    return out, count


# -------------------------------------------------------------------- news
def build_news():
    items = load("news.md").get("news") or []
    rows = []
    for item in items:
        where = "content/news.md"
        rows.append({
            "d": bilingual(need(item, "date", where), where, "date"),
            "t": bilingual(need(item, "text", where), where, "text"),
        })
    return rows


# ---------------------------------------------------------------- research
VALID_COLOURS = {"track-1", "track-2", "track-3"}


def build_research():
    pillars = load("research.md").get("pillars") or []
    rows = []
    for pillar in pillars:
        where = f"content/research.md → {pillar.get('tag', '?')}"
        colour = pillar.get("colour", "track-1")
        if colour not in VALID_COLOURS:
            sys.exit(f"ERROR in {where}: colour must be one of {sorted(VALID_COLOURS)}")
        highlights = []
        for paper in pillar.get("highlights") or []:
            spot = where + " → highlights"
            entry = {
                "v": need(paper, "venue", spot),
                "title": need(paper, "title", spot),
                "intro": bilingual(paper.get("intro", ""), spot, "intro"),
            }
            for key in ("link", "project", "code"):
                if paper.get(key):
                    entry[key] = paper[key]
            if paper.get("award"):
                entry["award"] = bilingual(paper["award"], spot, "award")
            highlights.append(entry)
        rows.append({
            "cls": colour,
            "tag": bilingual(need(pillar, "tag", where), where, "tag"),
            "title": bilingual(need(pillar, "title", where), where, "title"),
            "lede": bilingual(pillar.get("lede", ""), where, "lede"),
            "body": bilingual(pillar.get("body", ""), where, "body"),
            "venues": pillar.get("venues") or [],
            "highlights": highlights,
        })
    return rows


# ---------------------------------------------------------------- sponsors
def build_sponsors():
    rows = []
    for sponsor in load("sponsors.md").get("sponsors") or []:
        where = "content/sponsors.md"
        rows.append({
            "en": need(sponsor, "en", where),
            "zh": sponsor.get("zh") or sponsor["en"],
            "logo": sponsor.get("logo", ""),
            "url": sponsor.get("url") or "",
        })
    return rows


def main():
    i18n, key_count = build_i18n()
    team, people = build_team()
    news = build_news()
    pillars = build_research()
    sponsors = build_sponsors()

    data = dict(team)
    data["news"] = news
    data["sponsors"] = sponsors
    data["tracks"] = pillars

    JS.mkdir(parents=True, exist_ok=True)
    (JS / "i18n.js").write_text(
        js_file("IS2_I18N", i18n, "Interface text, built from content/ui.md"),
        encoding="utf-8")
    (JS / "data.js").write_text(
        js_file("IS2_DATA", data, "Site content, built from content/*.md"),
        encoding="utf-8")

    papers = sum(len(p["highlights"]) for p in pillars)
    print("Build OK")
    print(f"  interface strings : {key_count}")
    print(f"  people            : {people}")
    print(f"  news items        : {len(news)}")
    print(f"  research pillars  : {len(pillars)}  ({papers} highlighted papers)")
    print(f"  sponsors          : {len(sponsors)}")


if __name__ == "__main__":
    main()

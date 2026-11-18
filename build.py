#!/usr/bin/env python3
"""
IS2 Lab site builder.

Reads the markdown files in content/ (and content/publications.bib) and regenerates:
    assets/js/i18n.js   (interface text)
    assets/js/data.js   (people, news, research, sponsors, publications)

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
SLUG = re.compile(r"^[a-z0-9][a-z0-9-]*$")


def build_research():
    pillars = load("research.md").get("pillars") or []
    rows = []
    seen = set()
    for index, pillar in enumerate(pillars):
        where = f"content/research.md → {pillar.get('tag', '?')}"
        colour = pillar.get("colour", "track-1")
        if colour not in VALID_COLOURS:
            sys.exit(f"ERROR in {where}: colour must be one of {sorted(VALID_COLOURS)}")
        pid = str(pillar.get("id") or f"pillar-{index + 1}")
        if not SLUG.match(pid):
            sys.exit(f"ERROR in {where}: id '{pid}' may only use lower-case letters, digits and '-'")
        if pid in seen:
            sys.exit(f"ERROR in {where}: id '{pid}' is used twice")
        seen.add(pid)
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
            "id": pid,
            "image": pillar.get("image") or "",
            "cls": colour,
            "tag": bilingual(need(pillar, "tag", where), where, "tag"),
            "title": bilingual(need(pillar, "title", where), where, "title"),
            "lede": bilingual(pillar.get("lede", ""), where, "lede"),
            "body": bilingual(pillar.get("body", ""), where, "body"),
            "venues": pillar.get("venues") or [],
            "topics": bilingual_list(pillar.get("topics") or [], where, "topics"),
            "highlights": highlights,
        })
    return rows


# ------------------------------------------------------------------ impact
def build_impact(pillar_ids):
    path = CONTENT / "impact.md"
    if not path.exists():
        return []
    rows = []
    for item in load("impact.md").get("impact") or []:
        where = "content/impact.md"
        layer = item.get("layer") or ""
        if layer and layer not in pillar_ids:
            sys.exit(f"ERROR in {where}: layer '{layer}' is not one of {sorted(pillar_ids)} "
                     "(the ids in content/research.md)")
        rows.append({
            "layer": layer,
            "image": item.get("image") or "",
            "title": bilingual(need(item, "title", where), where, "title"),
            "problem": bilingual(item.get("problem", ""), where, "problem"),
            "impact": bilingual(item.get("impact", ""), where, "impact"),
            "link": item.get("link") or "",
        })
    return rows


# ------------------------------------------------------------ publications
# content/publications.bib is ordinary BibTeX (export it from DBLP, Google
# Scholar, Zotero…) plus a few optional fields the site understands:
#   venue  = {CCS 2025}            short label shown on the site
#   pillar = {ai-safety}           research-pillar id(s), comma-separated
#   url    = {https://…}           paper link (falls back to doi)
#   project= {https://…}           project page
#   code   = {https://…}           code link
#   slides = {https://…}           slides link
#   award  = {Best Paper Award}    award badge
LATEX_ACCENTS = {
    '\\"a': "ä", '\\"o': "ö", '\\"u': "ü", '\\"A': "Ä", '\\"O': "Ö", '\\"U': "Ü",
    "\\'e": "é", "\\'a": "á", "\\'i": "í", "\\'o": "ó", "\\'u": "ú", "\\'E": "É",
    "\\`e": "è", "\\`a": "à", "\\^e": "ê", "\\^o": "ô", "\\~n": "ñ", "\\c c": "ç",
    "\\c{c}": "ç", "\\ss": "ß", "\\o": "ø", "\\aa": "å",
}


def bib_entries(text):
    """Yield (type, key, fields) for each @type{key, field = value, …} entry."""
    i, n = 0, len(text)
    while True:
        at = text.find("@", i)
        if at < 0:
            return
        brace = text.find("{", at)
        if brace < 0:
            return
        kind = text[at + 1:brace].strip().lower()
        # find the matching close brace of the entry
        depth, j = 0, brace
        while j < n:
            if text[j] == "{":
                depth += 1
            elif text[j] == "}":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        body = text[brace + 1:j]
        i = j + 1
        if kind in ("comment", "preamble", "string"):
            continue
        key, _, rest = body.partition(",")
        yield kind, key.strip(), bib_fields(rest)


def bib_fields(body):
    fields, i, n = {}, 0, len(body)
    while i < n:
        eq = body.find("=", i)
        if eq < 0:
            break
        name = body[i:eq].strip().strip(",").strip().lower()
        j = eq + 1
        while j < n and body[j].isspace():
            j += 1
        if j < n and body[j] == "{":
            depth, k = 0, j
            while k < n:
                if body[k] == "{":
                    depth += 1
                elif body[k] == "}":
                    depth -= 1
                    if depth == 0:
                        break
                k += 1
            value, i = body[j + 1:k], k + 1
        elif j < n and body[j] == '"':
            k = body.find('"', j + 1)
            value, i = body[j + 1:k], k + 1
        else:
            k = body.find(",", j)
            k = n if k < 0 else k
            value, i = body[j:k], k
        comma = body.find(",", i)
        i = n if comma < 0 else comma + 1
        if name:
            fields[name] = " ".join(value.split())
    return fields


def delatex(value):
    for src, dst in LATEX_ACCENTS.items():
        value = value.replace("{" + src + "}", dst).replace(src, dst)
    value = value.replace("\\&", "&").replace("--", "–").replace("~", " ")
    value = re.sub(r"\\[a-zA-Z]+\s*", "", value)
    return value.replace("{", "").replace("}", "").strip()


def bib_authors(value):
    names = []
    for raw in re.split(r"\s+and\s+", value):
        raw = delatex(raw)
        if raw.lower() == "others":
            names.append("et al.")
            continue
        if "," in raw:
            last, _, first = raw.partition(",")
            raw = f"{first.strip()} {last.strip()}"
        names.append(raw.strip())
    return ", ".join(n for n in names if n)


def build_publications(pillar_ids):
    path = CONTENT / "publications.bib"
    if not path.exists():
        return []
    rows = []
    for order, (kind, key, f) in enumerate(bib_entries(path.read_text(encoding="utf-8"))):
        where = f"content/publications.bib → {key or '?'}"
        title = delatex(f.get("title", ""))
        if not title:
            sys.exit(f"ERROR in {where}: missing title")
        year = re.sub(r"\D", "", f.get("year", ""))
        if not year:
            sys.exit(f"ERROR in {where}: missing year")
        pillars = [p.strip() for p in f.get("pillar", "").split(",") if p.strip()]
        for p in pillars:
            if p not in pillar_ids:
                sys.exit(f"ERROR in {where}: pillar '{p}' is not one of {sorted(pillar_ids)} "
                         "(the ids in content/research.md)")
        where_pub = delatex(f.get("booktitle") or f.get("journal") or "")
        url = f.get("url") or (("https://doi.org/" + f["doi"]) if f.get("doi") else "")
        row = {
            "key": key,
            "title": title,
            "authors": bib_authors(f["author"]) if f.get("author") else "",
            "venue": delatex(f.get("venue") or where_pub or ""),
            "full": where_pub,
            "year": int(year),
            "pillars": pillars,
            "_order": order,
        }
        for field in ("project", "code", "slides", "award"):
            if f.get(field):
                row[field] = delatex(f[field]) if field == "award" else f[field]
        if url:
            row["url"] = url
        rows.append(row)
    rows.sort(key=lambda r: (-r["year"], r["_order"]))
    for r in rows:
        del r["_order"]
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
    pubs = build_publications({p["id"] for p in pillars})

    data = dict(team)
    data["news"] = news
    data["sponsors"] = sponsors
    data["tracks"] = pillars
    data["pubs"] = pubs
    impact = build_impact({p["id"] for p in pillars})
    data["impact"] = impact

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
    print(f"  publications      : {len(pubs)}")
    print(f"  impact cards      : {len(impact)}")


if __name__ == "__main__":
    main()

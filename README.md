# IS² Lab Website

A modern, bilingual (English / 中文) website for the **Intelligent System Security (IS²) Lab**,
College of Control Science and Engineering, Zhejiang University.

**You update the site by editing markdown files in `content/`.**
Push the change, and GitHub rebuilds and republishes the site automatically.

---

## Updating the website

1. Open the file in `content/` that matches what you want to change (see the table below).
2. Edit the text. Every item has an English (`en:`) and a Chinese (`zh:`) version.
3. Commit and push — or just click **Edit** ✏️ on GitHub and press *Commit changes*.
4. Wait about a minute. The site rebuilds and goes live on its own.

| To change… | Edit this file |
|---|---|
| News and announcements | `content/news.md` |
| Members, alumni | `content/team.md` |
| Research areas (OS kernels, industrial control software, AI systems; each gets its own page), highlight papers, topics | `content/research.md` |
| Publications list | `content/publications.bib` |
| "Problems we work on" picture cards, grouped by research area | `content/impact.md` (pictures in `images/impact/`) |
| Funders and industry partners | `content/sponsors.md` |
| Home-page introduction, headings, buttons, page wording | `content/ui.md` |
| Group photo on the home page | save it as `images/group.jpg` |

You never need to touch the HTML, CSS or JavaScript to change content.

### Example: adding publications

`content/publications.bib` is plain BibTeX. Export entries from DBLP, Google Scholar or Zotero and
paste them in. The site groups them by year automatically. Add any of these optional fields:

```bibtex
@inproceedings{chen2026rounding,
  author = {Xiangxiang Chen and ... and Jingyi Wang},
  title  = {Rounding-Guided Backdoor Injection in Deep Learning Model Quantization},
  booktitle = {NDSS},
  year   = {2026},
  venue  = {NDSS 2026},          % short label shown on the site
  pillar = {ai},                 % kernel, control and/or ai (comma-separated)
  url    = {https://arxiv.org/abs/2510.09647},
  code   = {https://github.com/...},
  award  = {Best Paper Award},   % shows an award badge; the "Awards" filter uses it
}
```

The `pillar` values are the `id:` fields in `content/research.md`. Each pillar's page is
`pillar.html?id=<id>`, and you can add a figure for it with `image: images/research/<name>.jpg`.

### Example: posting a news item

Open `content/news.md` and copy the top block, then edit it:

```yaml
news:
- date:
    en: Jul 2026
    zh: 2026 年 7 月
  text:
    en: Our paper has been accepted at ICSE 2027!
    zh: 我们的论文被 ICSE 2027 接收！
- date:                      # the previously newest item
    en: Mar 2026
```

Newest goes at the top. Commit, and it appears on the home page and the news page.

### Example: adding a member

In `content/team.md`, under the right group (`faculty`, `postdocs`, `phd`, `master`, `ra`):

```yaml
phd:
- name: New Student
  role:
    en: PhD Student · 2026 fall
    zh: 博士生 · 2026 秋季入学
  photo: images/teampic/newstudent.jpg
  notes:
    en:
    - B.E., Some University
    zh:
    - 学士，某大学
```

Upload the photo to `images/teampic/` in the same commit.

### A few rules

- Keep the **indentation** exactly as in the surrounding entries (the format is indentation-sensitive).
- Keep the field names on the left (`date:`, `text:`, `name:`…) unchanged; edit only the values.
- If a value contains a colon followed by a space, wrap it in quotes: `en: "Verification: a primer"`.
- If you break something, the build **fails safely** — the live site stays as it was, and the
  Actions tab shows an error message naming the file and the field.

---

## How it works

```
content/*.md   ->   build.py   ->   assets/js/{i18n,data}.js   ->   the live site
   you edit          automatic            generated                   published
```

`build.py` reads the markdown, checks it for mistakes, and regenerates the two JavaScript
data files the pages read. The GitHub Action in `.github/workflows/deploy.yml` runs this on
every push and publishes the result.

The generated files carry a *"do not edit by hand"* header — any manual change to them is
overwritten on the next build. Edit `content/` instead.

### Building locally (optional)

```bash
pip install pyyaml
python3 build.py
python3 -m http.server 8000     # then open http://localhost:8000
```

---

## First-time setup (once only)

1. Copy everything in this folder into the root of your `is2lab.github.io` repo,
   keeping your existing `images/` folder.
2. Make sure the hidden **`.nojekyll`** file made it across.
3. **Delete the old `CNAME` file.** Your repo has one pointing at `www.allanlab.org`
   (left over from the template this site was forked from). If you keep it, GitHub will
   try to serve the site from that wrong domain.
4. In the repo: **Settings → Pages → Build and deployment → Source**, choose
   **GitHub Actions**. This lets the workflow publish the site.
5. Optionally delete the old Jekyll files (`_config.yml`, `_layouts/`, `_includes/`,
   `_pages/`, `Gemfile`, `index.md`). They are already inert thanks to `.nojekyll`.
6. Push. The Actions tab will show the build, and the site goes live.

---

## What's in here

```
├── .github/workflows/deploy.yml   # builds + publishes on every push
├── build.py                       # content/*.md  ->  assets/js/*.js
├── content/                       # <-- THE FILES YOU EDIT
│   ├── publications.bib
│   ├── impact.md
│   ├── news.md
│   ├── team.md
│   ├── research.md
│   ├── sponsors.md
│   └── ui.md
├── .nojekyll                      # serve the files as-is, no Jekyll
├── index.html  research.html  pillar.html   # pillar.html?id=<pillar id>
├── publications.html  team.html  news.html  vacancies.html
└── assets/
    ├── css/styles.css             # design system, light + dark themes
    └── js/
        ├── i18n.js                # GENERATED from content/ui.md
        ├── data.js                # GENERATED from the other content files
        └── main.js                # header/footer, language/theme toggles, rendering
```

The site reuses the `images/` folder already in your repo; it is not duplicated here.

### Sponsor logos

The home and Research pages show a **"Supported by"** strip. Until you add logo files it shows each
sponsor's name as a text tile. Add the official logos to **`images/sponsors/`** using the
filenames listed in `content/sponsors.md` (`nsfc.png`, `ccf.png`, `huawei.png`,
`alibaba.png`, `ant-group.png`, `uwintech.png`) and they appear automatically.
Transparent or white backgrounds work best; PNG or SVG are both fine.

---

## Language and theme

The **中文 / EN** button in the header switches language across the whole site, and the **☾** button
switches light/dark. Both remember the visitor's choice in their browser.

# IS² Lab Website (rebuilt)

A modern, bilingual (English / 中文) static site for the **Intelligent System Security (IS²) Lab**,
College of Control Science and Engineering, Zhejiang University.

Pure HTML/CSS/JS — **no Jekyll build step**. GitHub Pages serves the files directly.

---

## What's in here

```
is2lab-site/
├── .nojekyll              # tells GitHub Pages to skip Jekyll and serve files as-is
├── index.html             # home
├── team.html              # people (faculty / postdocs / PhD / master / RA / alumni)
├── research.html          # research strengths (stat band + two track panels)
├── publications.html      # links out to Prof. Wang's publication list
├── news.html              # full news archive
├── vacancies.html         # open positions / join us
├── README.md
└── assets/
    ├── css/styles.css      # whole design system + light/dark themes
    └── js/
        ├── i18n.js         # all static UI text, EN + ZH
        ├── data.js         # team / news / research data, EN + ZH (single source of truth)
        └── main.js         # language toggle, theme toggle, rendering, mobile nav
```

The site **reuses the `images/` folder already in your repo** — it is intentionally
not duplicated here. Keep that folder where it is.

---

## How to deploy to is2lab.github.io

1. **Back up** your current repo (or work on a branch) so you can roll back.
2. Copy **everything in this folder** into the **root** of your `is2lab.github.io` repo,
   alongside your existing `images/` folder.
3. Make sure the hidden **`.nojekyll`** file made it across (it disables the old Jekyll build).
4. Your old Jekyll files (`_config.yml`, `_layouts/`, `_includes/`, `_pages/`, `index.md`, `Gemfile`, …)
   are now inert because of `.nojekyll`. You can **leave them or delete them** — deleting is cleaner.
5. Commit and push. GitHub Pages will redeploy in a minute or two.

### ⚠️ Important: the stale `CNAME` file
Your current repo contains a `CNAME` file pointing to **`www.allanlab.org`** — a leftover from the
AllanLab template this site was forked from. This project **deliberately does not include a CNAME**,
so the site keeps serving at **is2lab.github.io**. If you copy files in without deleting the old
`CNAME`, GitHub will keep trying to use that wrong custom domain. **Delete the old `CNAME` file**
from the repo (unless you actually own a custom domain you want to point here).

---

## Editing content

Almost everything lives in two files:

- **`assets/js/data.js`** — team members, the news archive, and the two research tracks.
  Every entry has `{ en: "...", zh: "..." }`. Edit the text, add/remove items, done.
- **`assets/js/i18n.js`** — the fixed UI wording (nav labels, headings, hero, footer…), EN + ZH.

To add a team member, copy an existing object in the relevant array in `data.js` and update the
`name`, `role`, and `img` (the `img` path should match a file in your `images/teampic/` folder).

### Sponsor logos (Research page)

The Research page ends with a **"Supported by"** strip. Until you add logo files it shows each
sponsor's name as a clean text tile; drop the official logos into a new **`images/sponsors/`** folder
in your repo and they'll appear automatically. Expected filenames (editable in `assets/js/data.js`
under the `sponsors` array):

```
images/sponsors/nsfc.png
images/sponsors/ccf.png
images/sponsors/huawei.png
images/sponsors/alibaba.png
images/sponsors/ant-group.png
images/sponsors/uwintech.png
```

Use logos with transparent or white backgrounds (the tiles are white). PNG or SVG both work — if you
use SVG, just change the file extension in the `logo:` field. To add or remove a sponsor, edit that
same `sponsors` array.

---

## Language & theme toggles

- The **EN / 中文** button in the nav switches languages instantly and remembers the choice
  (stored locally in the browser).
- The **light / dark** button switches theme and is likewise remembered.

---

## Local preview

From inside this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. (Open via a server, not by double-clicking the HTML file,
so the browser will load the JS modules correctly.)

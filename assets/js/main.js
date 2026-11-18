/* =========================================================
   IS2 Lab — behaviour: header/footer, i18n, theme, rendering
   Content comes from assets/js/{i18n,data}.js, which build.py
   generates from content/*.md and content/publications.bib.
   ========================================================= */
(function () {
  "use strict";

  var LANG_KEY = "is2-lang";
  var THEME_KEY = "is2-theme";
  var dict = window.IS2_I18N || {};
  var DATA = window.IS2_DATA || {};
  var CONTACT_EMAIL = "wangjyee@gmail.com";
  var PUBS_HOMEPAGE = "https://wang-jingyi.github.io/pubs/";

  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function initialTheme() {
    var saved = load(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var lang = load(LANG_KEY) === "zh" ? "zh" : "en";
  var page = (document.body && document.body.getAttribute("data-page")) || "";
  var params = new URLSearchParams(window.location.search);

  function t(key) {
    var d = dict[lang] || dict.en || {};
    if (d[key] != null) return d[key];
    return (dict.en && dict.en[key] != null) ? dict.en[key] : key;
  }
  function L(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] != null && obj[lang] !== "" ? obj[lang] : (obj.en || "");
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function ext(url, label) {
    return '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label) + "</a>";
  }
  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
    return el;
  }
  function track(id) {
    var list = DATA.tracks || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  var SYMBOLS = { "track-1": "⊢", "track-2": "⟳", "track-3": "∀" };

  /* ---------- shared header + footer ---------- */
  function renderChrome() {
    var links = [
      ["research", "research.html", "nav.research"],
      ["publications", "publications.html", "nav.publications"],
      ["team", "team.html", "nav.team"],
      ["news", "news.html", "nav.news"],
      ["join", "vacancies.html", "nav.join"]
    ];
    var nav = links.map(function (l) {
      var on = page === l[0] || (page === "pillar" && l[0] === "research");
      return '<a href="' + l[1] + '"' + (on ? ' class="on" aria-current="page"' : "") + ">" + esc(t(l[2])) + "</a>";
    }).join("");
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    mount("site-header",
      '<div class="bar">' +
        '<a class="brand" href="index.html">' +
          '<span class="brand-mark">IS²</span>' +
          '<span class="brand-text"><span class="brand-name">IS² Lab</span>' +
          '<span class="brand-sub">' + esc(t("brand.sub")) + "</span></span>" +
        "</a>" +
        '<button class="burger" id="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="menu">☰</button>' +
        '<nav class="menu" id="menu" aria-label="Main">' + nav +
          '<span class="tools">' +
            '<button class="tool" id="langBtn" type="button" aria-label="Switch language">' + (lang === "en" ? "中文" : "EN") + "</button>" +
            '<button class="tool" id="themeBtn" type="button" aria-label="Toggle dark mode">' + (dark ? "☀" : "☾") + "</button>" +
          "</span>" +
        "</nav>" +
      "</div>");

    mount("site-footer",
      '<div class="bar foot-bar">' +
        "<span>© " + new Date().getFullYear() + " " + esc(t("foot.rights")) + " " + esc(t("foot.partof")) + "</span>" +
        "<span>" + esc(t("foot.addr")) + ' · <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + "</a>" +
        ' · <a href="https://github.com/IS2Lab" target="_blank" rel="noopener">GitHub</a></span>' +
      "</div>");

    var burger = document.getElementById("burger");
    var menu = document.getElementById("menu");
    if (burger && menu) burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var langBtn = document.getElementById("langBtn");
    if (langBtn) langBtn.addEventListener("click", function () {
      lang = lang === "en" ? "zh" : "en";
      save(LANG_KEY, lang);
      renderAll();
    });
    var themeBtn = document.getElementById("themeBtn");
    if (themeBtn) themeBtn.addEventListener("click", function () {
      setTheme(dark ? "light" : "dark");
      renderChrome();
    });
  }

  /* ---------- static text ---------- */
  function applyStatic() {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
  }

  /* ---------- news ---------- */
  function newsRow(n) {
    return '<li class="news-row"><span class="news-date">' + esc(L(n.d)) + "</span>" +
      '<span class="news-text">' + L(n.t) + "</span></li>";
  }
  function renderNews() {
    var all = DATA.news || [];
    mount("news-preview", all.slice(0, 8).map(newsRow).join(""));
    mount("news-all", all.map(newsRow).join(""));
  }

  /* ---------- research ---------- */
  /* small square icon beside a pillar's title; shows the pillar's image if one is set */
  function icon(tr) {
    var sym = '<span aria-hidden="true">' + (SYMBOLS[tr.cls] || "◆") + "</span>";
    var img = tr.image ? '<img src="' + esc(tr.image) + '" alt="" loading="lazy" onerror="this.remove()">' : "";
    return '<span class="ico ' + tr.cls + '">' + sym + img + "</span>";
  }
  function renderTiles() {
    mount("research-tiles", (DATA.tracks || []).map(function (tr) {
      return '<a class="tile" href="pillar.html?id=' + encodeURIComponent(tr.id) + '">' + icon(tr) +
        '<span class="tile-body"><span class="tile-title">' + esc(L(tr.title)) + "</span>" +
        '<span class="tile-text">' + esc(L(tr.lede)) + "</span></span></a>";
    }).join(""));
  }
  function topics(tr) {
    var list = L(tr.topics) || [];
    if (!list.length) return "";
    return '<ul class="topics">' + list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }
  function card(c) {
    var img = c.image ? '<img src="' + esc(c.image) + '" alt="" loading="lazy">' : "";
    var title = esc(L(c.title));
    if (c.link) {
      var external = /^https?:/.test(c.link);
      title = '<a href="' + esc(c.link) + '"' + (external ? ' target="_blank" rel="noopener"' : "") + ">" + title + "</a>";
    }
    return '<article class="card">' + (img ? '<div class="card-img">' + img + "</div>" : "") +
      '<div class="card-body"><h3>' + title + "</h3>" +
      "<p>" + esc(L(c.problem)) + "</p>" +
      (L(c.impact) ? '<p class="card-impact"><strong>' + esc(t("impact.label")) + "</strong> " + esc(L(c.impact)) + "</p>" : "") +
      "</div></article>";
  }
  /* problem cards, grouped under the software layer they belong to */
  function renderImpact() {
    var cards = DATA.impact || [];
    var groups = (DATA.tracks || []).map(function (tr) {
      return { tr: tr, items: cards.filter(function (c) { return c.layer === tr.id; }) };
    });
    var loose = cards.filter(function (c) { return !track(c.layer); });
    var html = groups.filter(function (g) { return g.items.length; }).map(function (g) {
      return '<div class="layer-group">' +
        '<h3 class="layer-label"><a href="pillar.html?id=' + encodeURIComponent(g.tr.id) + '">' + icon(g.tr) +
        "<span>" + esc(L(g.tr.title)) + "</span></a></h3>" +
        '<div class="cards">' + g.items.map(card).join("") + "</div></div>";
    }).join("");
    if (loose.length) html += '<div class="layer-group"><div class="cards">' + loose.map(card).join("") + "</div></div>";
    mount("impact-mount", html);
  }
  function renderResearchList() {
    mount("research-list", (DATA.tracks || []).map(function (tr) {
      var href = "pillar.html?id=" + encodeURIComponent(tr.id);
      return '<article class="area">' + icon(tr) +
        '<div class="area-body">' +
          '<h2><a href="' + href + '">' + esc(L(tr.title)) + "</a></h2>" +
          '<p class="area-lede">' + esc(L(tr.lede)) + "</p>" + topics(tr) +
          "<p>" + esc(L(tr.body)) + "</p>" +
          '<a class="more" href="' + href + '">' + esc(t("research.readmore")) + "</a>" +
        "</div></article>";
    }).join(""));
  }

  /* ---------- publication rows ---------- */
  function pubLinks(p) {
    var out = [];
    if (p.url) out.push(ext(p.url, t("pub.paper")));
    if (p.project) out.push(ext(p.project, t("pub.project")));
    if (p.code) out.push(ext(p.code, t("pub.code")));
    if (p.slides) out.push(ext(p.slides, t("pub.slides")));
    return out.join("");
  }
  function pubRow(p) {
    var title = p.url
      ? '<a class="pub-title" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>"
      : '<span class="pub-title">' + esc(p.title) + "</span>";
    var award = p.award ? '<span class="award">' + esc(L(p.award)) + "</span>" : "";
    return '<li class="pub">' + title +
      (p.authors ? '<span class="pub-authors">' + esc(p.authors) + "</span>" : "") +
      (p.intro ? '<span class="pub-intro">' + esc(p.intro) + "</span>" : "") +
      '<span class="pub-meta"><em>' + esc(p.venue) + "</em>" + pubLinks(p) + award + "</span></li>";
  }

  /* ---------- pillar page ---------- */
  function renderPillar() {
    var el = document.getElementById("pillar-mount");
    if (!el) return;
    var tr = track(params.get("id"));
    if (!tr) {
      el.innerHTML = '<p class="crumb"><a href="research.html">' + esc(t("pillar.back")) + "</a></p><p>" + esc(t("pillar.notfound")) + "</p>";
      return;
    }
    document.title = L(tr.title) + " — IS² Lab";
    var hl = (tr.highlights || []).map(function (w) {
      return pubRow({ title: w.title, url: w.link, project: w.project, code: w.code, venue: w.v, award: w.award, intro: L(w.intro) });
    }).join("");
    var venues = (tr.venues || []).length
      ? '<p class="venues"><strong>' + esc(t("pillar.venues")) + ":</strong> " + tr.venues.map(esc).join(" · ") + "</p>" : "";
    var count = (DATA.pubs || []).filter(function (p) { return (p.pillars || []).indexOf(tr.id) >= 0; }).length;
    el.innerHTML =
      '<p class="crumb"><a href="research.html">' + esc(t("pillar.back")) + "</a></p>" +
      '<header class="pillar-head ' + tr.cls + '"><h1>' + esc(L(tr.title)) + "</h1>" +
        '<p class="area-lede">' + esc(L(tr.lede)) + "</p>" + topics(tr) + "<p>" + esc(L(tr.body)) + "</p>" + venues + "</header>" +
      "<section><h2>" + esc(t("research.highlights")) + '</h2><ul class="pubs">' + hl + "</ul>" +
      (count ? '<p><a class="more" href="publications.html?pillar=' + encodeURIComponent(tr.id) + '">' + esc(t("pillar.pubs")) + "</a></p>" : "") +
      "</section>";
  }

  /* ---------- publications page ---------- */
  var pubFilter = params.get("pillar") || "all";
  function renderPublications() {
    var el = document.getElementById("pubs-mount");
    if (!el) return;
    var filters = [["all", t("pub.all")]]
      .concat((DATA.tracks || []).map(function (tr) { return [tr.id, L(tr.title)]; }))
      .concat([["awards", t("pub.awards")]]);
    var chips = filters.map(function (f) {
      var on = pubFilter === f[0];
      return '<button type="button" class="chip' + (on ? " on" : "") + '" data-filter="' + esc(f[0]) + '" aria-pressed="' + on + '">' + esc(f[1]) + "</button>";
    }).join("");
    var list = (DATA.pubs || []).filter(function (p) {
      if (pubFilter === "all") return true;
      if (pubFilter === "awards") return !!p.award;
      return (p.pillars || []).indexOf(pubFilter) >= 0;
    });
    var groups = [], cur = null;
    list.forEach(function (p) {
      if (!cur || cur.year !== p.year) { cur = { year: p.year, items: [] }; groups.push(cur); }
      cur.items.push(p);
    });
    var body = groups.length ? groups.map(function (g) {
      return '<section class="year"><h2>' + g.year + '</h2><ul class="pubs">' + g.items.map(pubRow).join("") + "</ul></section>";
    }).join("") : '<p class="muted">' + esc(t("pub.empty")) + "</p>";
    el.innerHTML = '<div class="chips" role="group" aria-label="Filter">' + chips + "</div>" + body;
    el.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () {
        pubFilter = b.getAttribute("data-filter");
        var url = new URL(window.location.href);
        if (pubFilter === "all") url.searchParams.delete("pillar"); else url.searchParams.set("pillar", pubFilter);
        try { history.replaceState(null, "", url); } catch (e) {}
        renderPublications();
      });
    });
    var full = document.getElementById("pubs-full");
    if (full) full.setAttribute("href", PUBS_HOMEPAGE);
  }

  /* ---------- people ---------- */
  function person(p, lead) {
    var notes = (p.edu ? L(p.edu) : []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var links = "";
    if (lead && p.homepage) links += ext(p.homepage, lang === "zh" ? "个人主页" : "Homepage");
    if (lead && p.email) links += '<a href="mailto:' + esc(p.email) + '">' + esc(p.email) + "</a>";
    var initials = p.name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2);
    return '<div class="person' + (lead ? " lead" : "") + '">' +
      '<div class="photo" data-initials="' + esc(initials) + '">' +
        (p.photo ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.remove()">' : "") +
      "</div>" +
      '<div class="person-meta"><span class="person-name">' + esc(p.name) + "</span>" +
        '<span class="person-role">' + esc(L(p.role)) + "</span>" +
        (notes ? "<ul>" + notes + "</ul>" : "") +
        (links ? '<span class="person-links">' + links + "</span>" : "") +
      "</div></div>";
  }
  function renderTeam() {
    var el = document.getElementById("team-mount");
    if (!el) return;
    function group(key, arr, lead) {
      if (!arr || !arr.length) return "";
      return '<section class="group"><h2>' + esc(t(key)) + "</h2>" +
        '<div class="people' + (lead ? " people-lead" : "") + '">' +
        arr.map(function (p) { return person(p, lead); }).join("") + "</div></section>";
    }
    var alumni = DATA.alumni || [];
    var rows = alumni.map(function (a) {
      return "<tr><td>" + esc(a.who) + "</td><td>" + esc(L(a.role)) + "</td><td>" + esc(L(a.where)) + "</td></tr>";
    }).join("");
    el.innerHTML =
      group("team.faculty", DATA.faculty, true) +
      group("team.postdocs", DATA.postdocs) +
      group("team.phd", DATA.phd) +
      group("team.master", DATA.master) +
      group("team.ra", DATA.ra) +
      (alumni.length ? '<section class="group"><h2>' + esc(t("team.alumni")) + "</h2>" +
        '<div class="table-box"><table class="alumni"><thead><tr><th>' + esc(t("alumni.who")) + "</th><th>" +
        esc(t("alumni.role")) + "</th><th>" + esc(t("alumni.where")) + "</th></tr></thead><tbody>" + rows +
        "</tbody></table></div></section>" : "");
  }

  /* ---------- sponsors ---------- */
  function renderSponsors() {
    mount("sponsors-mount", (DATA.sponsors || []).map(function (s) {
      var label = L({ en: s.en, zh: s.zh });
      var inner = (s.logo ? '<img src="' + esc(s.logo) + '" alt="' + esc(label) + '" loading="lazy" ' +
        'onerror="this.parentNode.classList.add(\'no-logo\');this.remove()">' : "") +
        '<span class="sponsor-name">' + esc(label) + "</span>";
      var cls = "sponsor" + (s.logo ? "" : " no-logo");
      return s.url
        ? '<a class="' + cls + '" href="' + esc(s.url) + '" target="_blank" rel="noopener" title="' + esc(label) + '">' + inner + "</a>"
        : '<span class="' + cls + '" title="' + esc(label) + '">' + inner + "</span>";
    }).join(""));
  }

  /* ---------- theme + init ---------- */
  function setTheme(next, remember) {
    document.documentElement.setAttribute("data-theme", next);
    if (remember !== false) save(THEME_KEY, next);
  }
  function renderAll() {
    applyStatic();
    renderChrome();
    renderNews();
    renderTiles();
    renderImpact();
    renderResearchList();
    renderPillar();
    renderPublications();
    renderTeam();
    renderSponsors();
  }

  setTheme(initialTheme(), false);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderAll);
  else renderAll();
})();

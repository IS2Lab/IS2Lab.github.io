/* =========================================================
   IS2 Lab — behaviour: i18n, theme, nav, dynamic rendering
   ========================================================= */
(function () {
  "use strict";

  var LANG_KEY = "is2-lang";
  var THEME_KEY = "is2-theme";
  var dict = window.IS2_I18N || {};
  var DATA = window.IS2_DATA || {};

  function getLang() {
    try { return localStorage.getItem(LANG_KEY) || "en"; } catch (e) { return "en"; }
  }
  function getTheme() {
    try {
      var t = localStorage.getItem(THEME_KEY);
      if (t) return t;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var lang = getLang();

  function t(key) {
    var d = dict[lang] || dict.en;
    return (d && d[key] != null) ? d[key] : ((dict.en && dict.en[key]) || key);
  }
  function L(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] != null ? obj[lang] : obj.en;
  }

  /* ---------- apply static translations ---------- */
  function applyStatic() {
    document.documentElement.setAttribute("lang", lang);
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    var html = document.querySelectorAll("[data-i18n-html]");
    html.forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    var titleEl = document.querySelector("[data-i18n-title]");
    // language button state
    var ens = document.querySelectorAll(".lang-en");
    var zhs = document.querySelectorAll(".lang-zh");
    ens.forEach(function (e) { e.classList.toggle("on", lang === "en"); });
    zhs.forEach(function (e) { e.classList.toggle("on", lang === "zh"); });
  }

  /* ---------- dynamic renderers ---------- */
  function personCard(p, faculty) {
    var li = (p.edu ? L(p.edu) : []).map(function (x) { return "<li>" + x + "</li>"; }).join("");
    var extra = "";
    if (faculty) {
      if (p.homepage) extra += '<li><a href="' + p.homepage + '" target="_blank" rel="noopener">' + (lang === "zh" ? "个人主页" : "Homepage") + ' ↗</a></li>';
      if (p.email) extra = '<div class="email"><a href="mailto:' + p.email + '">' + p.email + '</a></div>' + extra;
    }
    var emailBlock = (faculty && p.email) ? '<div class="email"><a href="mailto:' + p.email + '">' + p.email + '</a></div>' : "";
    var hp = (faculty && p.homepage) ? '<li><a href="' + p.homepage + '" target="_blank" rel="noopener">' + (lang === "zh" ? "个人主页 ↗" : "Homepage ↗") + '</a></li>' : "";
    return '' +
      '<div class="person' + (faculty ? ' faculty-card' : '') + '">' +
        '<div class="ph"><img loading="lazy" src="' + p.photo + '" alt="' + p.name + '"></div>' +
        '<div class="meta">' +
          '<div class="nm">' + p.name + '</div>' +
          '<div class="role">' + L(p.role) + '</div>' +
          '<ul>' + li + hp + '</ul>' +
          emailBlock +
        '</div>' +
      '</div>';
  }

  function renderTeam() {
    var mount = document.getElementById("team-mount");
    if (!mount) return;
    function block(key, arr, faculty) {
      if (!arr || !arr.length) return "";
      var cards = arr.map(function (p) { return personCard(p, faculty); }).join("");
      return '<div class="team-block">' +
        '<h3>' + t(key) + ' <span class="cnt">' + arr.length + '</span></h3>' +
        '<div class="people">' + cards + '</div></div>';
    }
    var alumniRows = (DATA.alumni || []).map(function (a) {
      return '<tr><td class="who">' + a.who + '</td><td>' + L(a.role) + '</td><td class="where">' + L(a.where) + '</td></tr>';
    }).join("");
    var alumni = '<div class="team-block"><h3>' + t("team.alumni") + ' <span class="cnt">' + (DATA.alumni || []).length + '</span></h3>' +
      '<div class="tablewrap"><table class="alumni"><thead><tr><th>' + t("alumni.who") + '</th><th>' + t("alumni.role") + '</th><th>' + t("alumni.where") + '</th></tr></thead><tbody>' +
      alumniRows + '</tbody></table></div></div>';

    mount.innerHTML =
      block("team.faculty", DATA.faculty, true) +
      block("team.postdocs", DATA.postdocs, false) +
      block("team.phd", DATA.phd, false) +
      block("team.master", DATA.master, false) +
      block("team.ra", DATA.ra, false) +
      alumni;
  }

  function newsItem(n) {
    return '<div class="news-item"><div class="news-date">' + L(n.d) + '</div>' +
      '<div class="news-body"><em>' + L(n.t) + '</em></div></div>';
  }

  function renderNewsPreview() {
    var mount = document.getElementById("news-preview");
    if (!mount) return;
    var items = (DATA.news || []).slice(0, 6).map(newsItem).join("");
    mount.innerHTML = items;
  }
  function renderNewsAll() {
    var mount = document.getElementById("news-all");
    if (!mount) return;
    mount.innerHTML = (DATA.news || []).map(newsItem).join("");
  }

  function renderResearch() {
    var mount = document.getElementById("research-mount");
    if (!mount) return;
    function lk(url, label) { return '<a href="' + url + '" target="_blank" rel="noopener">' + label + ' ↗</a>'; }
    var html = (DATA.tracks || []).map(function (tr) {
      var venues = (tr.venues || []).map(function (v) { return '<span class="venue">' + v + '</span>'; }).join("");
      var hs = (tr.highlights || []).map(function (w) {
        var award = w.award ? '<span class="award">' + L(w.award) + '</span>' : "";
        var primary = w.link || w.project || w.code || "";
        var titleHtml = primary
          ? '<a class="hl-title" href="' + primary + '" target="_blank" rel="noopener">' + w.title + ' <span class="hl-arrow">↗</span></a>'
          : '<div class="hl-title">' + w.title + '</div>';
        var links = [];
        if (w.link && w.link !== primary) links.push(lk(w.link, lang === "zh" ? "论文" : "Paper"));
        if (w.project) links.push(lk(w.project, lang === "zh" ? "项目主页" : "Project"));
        if (w.code) links.push(lk(w.code, lang === "zh" ? "代码" : "Code"));
        var linkRow = links.length ? '<div class="hl-links">' + links.join("") + '</div>' : "";
        return '<div class="hl">' +
          '<div class="hl-top"><span class="hl-venue">' + w.v + '</span>' + award + '</div>' +
          titleHtml +
          '<p class="hl-intro">' + L(w.intro) + '</p>' +
          linkRow +
        '</div>';
      }).join("");
      return '<div class="track ' + tr.cls + '">' +
        '<div class="track-head">' +
          '<div class="track-tag">' + L(tr.tag) + '</div>' +
          '<h3>' + L(tr.title) + '</h3>' +
          '<p class="track-quote">' + L(tr.lede) + '</p>' +
        '</div>' +
        '<div class="track-body"><p>' + L(tr.body) + '</p><div class="venues">' + venues + '</div></div>' +
        '<div class="works"><h4>' + t("research.highlights") + '</h4><div class="hl-grid">' + hs + '</div></div>' +
      '</div>';
    }).join("");
    mount.innerHTML = html;
  }

  function renderSponsors() {
    var mount = document.getElementById("sponsors-mount");
    if (!mount) return;
    mount.innerHTML = (DATA.sponsors || []).map(function (s) {
      var label = L({ en: s.en, zh: s.zh });
      var open = s.url ? '<a class="sponsor" href="' + s.url + '" target="_blank" rel="noopener">' : '<div class="sponsor">';
      var close = s.url ? '</a>' : '</div>';
      return open +
        '<img class="sponsor-logo" src="' + s.logo + '" alt="' + label + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\';var n=this.nextElementSibling;if(n)n.style.display=\'flex\';">' +
        '<span class="sponsor-name">' + label + '</span>' +
        close;
    }).join("");
  }

  function renderAll() {
    applyStatic();
    renderTeam();
    renderNewsPreview();
    renderNewsAll();
    renderResearch();
    renderSponsors();
  }

  /* ---------- toggles ---------- */
  function setLang(next) {
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    renderAll();
  }
  function setTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    var ic = document.querySelector(".theme-ic");
    if (ic) ic.textContent = next === "dark" ? "☀" : "☾";
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    setTheme(getTheme());
    renderAll();

    var langBtn = document.getElementById("langBtn");
    if (langBtn) langBtn.addEventListener("click", function () { setLang(lang === "en" ? "zh" : "en"); });

    var themeBtn = document.getElementById("themeBtn");
    if (themeBtn) themeBtn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      setTheme(cur === "dark" ? "light" : "dark");
    });

    var burger = document.getElementById("burger");
    var links = document.getElementById("navLinks");
    if (burger && links) burger.addEventListener("click", function () { links.classList.toggle("open"); });
  });
})();

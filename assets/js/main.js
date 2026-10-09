/* Renders the CV from window.CV (assets/js/data.js). */
(function () {
  "use strict";
  var CV = window.CV;
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Bold every variant of the author's own name.
  var SELF = /(Yi-Zeng Hsieh|Y\.\s?-?\s?Z\.\s?Hsieh|Y\. Z\. Hsieh|Hsieh, YZ\.?)([*⁺]*)/g;
  function hlAuthors(s) { return esc(s).replace(SELF, "<strong>$1$2</strong>"); }

  var ICONS = {
    mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    lab: '<path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/>',
    scholar: '<path d="m2 9 10-6 10 6-10 6z"/><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M9 8v8M12.5 8H14a4 4 0 0 1 0 8h-1.5z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 22v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.6 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.5 0C6 1.1 4.9 1.4 4.9 1.4a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.4 8.5c0 5 3 6.3 6 6.6a3 3 0 0 0-.9 2.4V22"/>',
    pdf: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10.5V4a1.5 1.5 0 0 1 3 0v6.5M14 10.5V5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6 6 0 0 1-5-2.7L3 15.5a1.5 1.5 0 0 1 2.5-1.7L8 16"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    robot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13v1M15 13v1M9 17h6"/><circle cx="12" cy="3" r="1"/>'
  };
  function icon(name, size) {
    size = size || 16;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- Profile ---------- */
  var p = CV.profile;
  $("avatar").src = p.photo;
  $("pName").textContent = p.name;
  $("pNameZh").textContent = p.nameZh;
  $("pRole").textContent = p.title;
  $("pAffil").innerHTML = esc(p.department) + "<br>" + esc(p.university);

  var contact = [
    { i: "mail", html: '<a href="mailto:' + esc(p.email) + '">' + esc(p.email) + "</a>" },
    { i: "phone", html: esc(p.phone) },
    { i: "pin", html: esc(p.address) },
    { i: "lab", url: p.links.lab, label: "CIHCI Lab website" },
    { i: "scholar", url: p.links.scholar, label: "Google Scholar" },
    { i: "orcid", url: p.links.orcid, label: "ORCID" },
    { i: "linkedin", url: p.links.linkedin, label: "LinkedIn" },
    { i: "github", url: p.links.github, label: "GitHub" },
    { i: "pdf", url: p.links.cvPdf, label: "Download CV (PDF)" }
  ];
  $("contact").innerHTML = contact.map(function (c) {
    if (c.url === "") return "";
    var body = c.html || '<a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(c.label) + "</a>";
    return "<li>" + icon(c.i) + "<span>" + body + "</span></li>";
  }).join("");

  $("bio").innerHTML = p.bio.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");

  /* ---------- Stats ---------- */
  var count = function (type) { return CV.publications.filter(function (x) { return x.type === type; }).length; };
  var stats = [
    [count("journal"), "Journal papers"],
    [count("conference"), "Conference papers"],
    [CV.patents.length, "Patents"],
    [CV.grants.length, "Research grants"],
    [CV.honors.length + "+", "Honors & awards"]
  ];
  $("stats").innerHTML = stats.map(function (s) {
    return '<div class="stat"><b>' + s[0] + "</b><span>" + s[1] + "</span></div>";
  }).join("");

  /* ---------- Interests ---------- */
  $("interests").innerHTML = CV.interests.map(function (x) {
    return "<li>" + icon(x.icon, 22) + "<span>" + esc(x.name) + "</span></li>";
  }).join("");

  /* ---------- Timelines ---------- */
  $("experienceList").innerHTML = CV.experience.map(function (e) {
    return '<li><div class="t-period">' + esc(e.period) + "</div><div>" +
      '<div class="t-role">' + (e.current ? '<span class="current-dot" aria-hidden="true"></span>' : "") + esc(e.role) + "</div>" +
      '<div class="t-org">' + esc(e.org) + "</div></div></li>";
  }).join("");

  $("educationList").innerHTML = CV.education.map(function (e) {
    return '<li><div class="t-period">' + esc(e.period) + "</div><div>" +
      '<div class="t-role">' + esc(e.degree) + "</div>" +
      '<div class="t-org">' + esc(e.school) + "</div>" +
      (e.note ? '<div class="t-note">' + esc(e.note) + "</div>" : "") + "</div></li>";
  }).join("");

  /* ---------- Publications ---------- */
  var PUB_TABS = [
    { key: "all", label: "All" },
    { key: "journal", label: "Journal" },
    { key: "conference", label: "Conference" },
    { key: "chapter", label: "Book Chapter" }
  ];
  var pubState = { tab: "all", q: "" };
  var TYPE_LABEL = { journal: "Journal", conference: "Conference", chapter: "Book Chapter" };

  function renderTabs(el, tabs, current, counts, onPick) {
    el.innerHTML = tabs.map(function (t) {
      return '<button class="tab" role="tab" type="button" data-key="' + t.key + '" aria-selected="' + (t.key === current) + '">' +
        esc(t.label) + '<span class="n">' + counts(t.key) + "</span></button>";
    }).join("");
    el.onclick = function (ev) {
      var b = ev.target.closest(".tab");
      if (!b) return;
      onPick(b.getAttribute("data-key"));
    };
  }

  function pubCount(key) {
    return key === "all" ? CV.publications.length : count(key);
  }

  function renderPubs() {
    renderTabs($("pubTabs"), PUB_TABS, pubState.tab, pubCount, function (k) { pubState.tab = k; renderPubs(); });
    var q = pubState.q.trim().toLowerCase();
    var list = CV.publications.filter(function (x) {
      if (pubState.tab !== "all" && x.type !== pubState.tab) return false;
      if (!q) return true;
      return (x.title + " " + x.authors + " " + x.venue + " " + x.year).toLowerCase().indexOf(q) !== -1;
    }).sort(function (a, b) { return b.year - a.year; });

    $("pubCount").textContent = "Showing " + list.length + " of " + CV.publications.length;

    if (!list.length) { $("pubList").innerHTML = '<p class="empty">No publications match your search.</p>'; return; }

    var html = "", lastYear = null;
    list.forEach(function (x) {
      if (x.year !== lastYear) {
        if (lastYear !== null) html += "</ol>";
        html += '<h3 class="pub-year">' + x.year + '</h3><ol class="pubs">';
        lastYear = x.year;
      }
      var badges = "";
      if (pubState.tab === "all") badges += '<span class="badge type">' + TYPE_LABEL[x.type] + "</span>";
      (x.tags || []).forEach(function (t) {
        badges += '<span class="badge' + (/Q1|Top/.test(t) ? " q1" : "") + '">' + esc(t) + "</span>";
      });
      if (x.award) badges += '<span class="badge award">★ ' + esc(x.award) + "</span>";
      if (x.doi) badges += '<a class="doi" href="https://doi.org/' + esc(x.doi) + '" target="_blank" rel="noopener">DOI</a>';

      html += '<li class="pub">' +
        '<div class="pub-title">' + esc(x.title) + "</div>" +
        '<div class="pub-authors">' + hlAuthors(x.authors) + "</div>" +
        '<div class="pub-venue">' + esc(x.venue) + "</div>" +
        (badges ? '<div class="pub-meta">' + badges + "</div>" : "") +
        "</li>";
    });
    html += "</ol>";
    $("pubList").innerHTML = html;
  }
  var searchTimer;
  $("pubSearch").addEventListener("input", function (e) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { pubState.q = e.target.value; renderPubs(); }, 120);
  });
  renderPubs();

  /* ---------- Patents ---------- */
  $("patentList").innerHTML = CV.patents.map(function (x) {
    return '<div class="patent"><div class="patent-top">' +
      '<span class="badge type">' + esc(x.region) + " · " + esc(x.kind) + "</span>" +
      '<span class="badge">' + x.year + "</span></div>" +
      '<div class="patent-title">' + esc(x.title) + "</div>" +
      '<div class="patent-no">' + esc(x.number) + "</div></div>";
  }).join("");

  /* ---------- Grants ---------- */
  function grantRows(arr) {
    return arr.map(function (g) {
      return "<tr><td>" + esc(g.period) + '</td><td><span class="role-pill' + (g.role === "PI" ? "" : " co") + '">' + esc(g.role) +
        "</span></td><td>" + esc(g.title) + "</td><td>" + esc(g.sponsor) + "</td></tr>";
    }).join("");
  }
  $("grantList").innerHTML = grantRows(CV.grants);
  $("eduGrantList").innerHTML = grantRows(CV.educationGrants);

  /* ---------- Honors ---------- */
  var HONOR_TABS = [
    { key: "all", label: "All" },
    { key: "personal", label: "Personal Honors" },
    { key: "paper", label: "Paper Awards" },
    { key: "student", label: "Student Competitions (as advisor)" }
  ];
  var CAT_LABEL = { personal: "Honor", paper: "Paper award", student: "Advisor" };
  var honorTab = "all";
  function honorCount(k) { return k === "all" ? CV.honors.length : CV.honors.filter(function (h) { return h.cat === k; }).length; }
  function renderHonors() {
    renderTabs($("honorTabs"), HONOR_TABS, honorTab, honorCount, function (k) { honorTab = k; renderHonors(); });
    $("honorList").innerHTML = CV.honors
      .filter(function (h) { return honorTab === "all" || h.cat === honorTab; })
      .sort(function (a, b) { return b.year - a.year; })
      .map(function (h) {
        return '<li><span class="h-year">' + h.year + "</span><span>" + esc(h.text) +
          (honorTab === "all" ? '<span class="h-cat">' + CAT_LABEL[h.cat] + "</span>" : "") + "</span></li>";
      }).join("");
  }
  renderHonors();

  /* ---------- Service ---------- */
  var li = function (arr) { return arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); };
  var chips = function (arr) { return arr.map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join(""); };
  $("editorialList").innerHTML = li(CV.editorial);
  $("confList").innerHTML = li(CV.conferenceRoles);
  $("panelList").innerHTML = li(CV.reviewing.panels);
  $("memberList").innerHTML = li(CV.memberships);
  $("reviewList").innerHTML = chips(CV.reviewing.journals);

  /* ---------- Teaching ---------- */
  $("teachingNote").textContent = CV.teaching.note;
  $("courseList").innerHTML = chips(CV.teaching.courses);
  $("advising").textContent = CV.advising;

  /* ---------- Talks ---------- */
  $("talkList").innerHTML = CV.talks.map(function (t) {
    return '<li><span class="h-year">' + t.year + "</span><span>" + esc(t.text) + "</span></li>";
  }).join("");

  /* ---------- Demos ---------- */
  $("demoList").innerHTML = CV.demos.map(function (d) {
    return '<a class="demo" href="https://youtu.be/' + esc(d.id) + '" target="_blank" rel="noopener">' +
      '<div class="demo-thumb"><img loading="lazy" src="https://i.ytimg.com/vi/' + esc(d.id) + '/hqdefault.jpg" alt=""></div>' +
      '<div class="demo-title">' + esc(d.title) + "</div></a>";
  }).join("");

  /* ---------- Navigation ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main .section"));
  $("navList").innerHTML = sections.map(function (s) {
    var label = s.getAttribute("data-nav");
    return '<li><a href="#' + s.id + '" data-target="' + s.id + '">' + esc(label) + "</a></li>";
  }).join("");

  var links = document.querySelectorAll(".nav a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-target") === en.target.id); });
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  // Mobile drawer
  var sidebar = $("sidebar"), menuBtn = $("menuBtn");
  function setMenu(open) {
    document.body.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", function () { setMenu(!document.body.classList.contains("nav-open")); });
  sidebar.addEventListener("click", function (e) { if (e.target.closest(".nav a")) setMenu(false); });
  document.addEventListener("click", function (e) {
    if (document.body.classList.contains("nav-open") && !document.querySelector(".nav").contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // Theme toggle
  $("themeBtn").addEventListener("click", function () {
    var root = document.documentElement;
    var cur = root.getAttribute("data-theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Footer
  $("year").textContent = new Date().getFullYear();
  $("updated").textContent = new Date(document.lastModified).toLocaleDateString("en-US", { year: "numeric", month: "long" });
})();

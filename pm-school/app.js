(function () {
  "use strict";

  var C = window.CURRICULUM;
  var M = window.MENTORS;
  var KEY = "maro-pm-school-v1";
  var XP_SEGMENT = 10;
  var XP_CORRECT = 5;

  // ---------- storage ----------
  function blank() { return { done: {}, quiz: {}, writes: {}, activity: [] }; }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var s = JSON.parse(raw);
      var b = blank();
      Object.keys(b).forEach(function (k) { if (!s[k]) s[k] = b[k]; });
      return s;
    } catch (e) { return blank(); }
  }
  var state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function touch() {
    var t = today();
    if (state.activity.indexOf(t) === -1) state.activity.push(t);
  }

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function dayById(id) { return C.days.filter(function (d) { return d.id === id; })[0]; }
  function initials(name) { return name.split(" ").map(function (p) { return p[0]; }).join("").slice(0, 2); }
  function totalMinutes(day) {
    if (!day.lesson) return 30;
    return day.lesson.segments.reduce(function (n, s) { return n + (s.minutes || 0); }, 0);
  }
  function countedSegments(day) {
    return day.lesson ? day.lesson.segments.filter(function (s) { return s.kind !== "bonus"; }) : [];
  }
  function segDone(dayId, i) { return !!(state.done[dayId] && state.done[dayId][i]); }
  function dayProgress(day) {
    var segs = countedSegments(day);
    if (!segs.length) return 0;
    var n = 0;
    day.lesson.segments.forEach(function (s, i) { if (s.kind !== "bonus" && segDone(day.id, i)) n++; });
    return n / segs.length;
  }
  function dayComplete(day) { return day.lesson && dayProgress(day) === 1; }
  function quizScore(day, si) {
    var seg = day.lesson.segments[si];
    var ans = (state.quiz[day.id] || {})[si] || {};
    var right = 0, answered = 0;
    seg.questions.forEach(function (q, qi) {
      if (ans[qi] != null) { answered++; if (ans[qi] === q.answer) right++; }
    });
    return { right: right, answered: answered, total: seg.questions.length };
  }
  function xp() {
    var total = 0;
    C.days.forEach(function (d) {
      if (!d.lesson) return;
      d.lesson.segments.forEach(function (s, i) {
        if (s.kind !== "bonus" && segDone(d.id, i)) total += XP_SEGMENT;
        if (s.kind === "quiz") total += quizScore(d, i).right * XP_CORRECT;
      });
    });
    return total;
  }
  function streak() {
    var set = {};
    state.activity.forEach(function (d) { set[d] = true; });
    var n = 0;
    var d = new Date();
    if (!set[today()]) d.setDate(d.getDate() - 1); // streak survives until today ends
    for (;;) {
      var k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      if (!set[k]) break;
      n++;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }
  function nextDay() {
    for (var i = 0; i < C.days.length; i++) {
      if (!dayComplete(C.days[i])) return C.days[i];
    }
    return C.days[C.days.length - 1];
  }

  // ---------- top bar ----------
  function renderStats() {
    var s = streak();
    document.getElementById("stats").innerHTML =
      '<span class="chip" title="Experience points">' + xp() + " XP</span>" +
      '<span class="chip" title="Days in a row with study">' + s + (s === 1 ? " day" : " days") + " streak</span>";
  }
  function setNav(view) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === view) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  // ---------- home ----------
  function dayCard(d) {
    var status;
    if (dayComplete(d)) status = '<span class="pill pill-done">Done</span>';
    else if (d.lesson) status = '<span class="pill pill-live">Ready</span>';
    else status = '<span class="pill pill-outline">Outline</span>';
    var mentors = d.mentors.map(function (m) { return M[m].name; }).join(", ");
    return '<a class="day-card" href="#' + d.id + '">' +
      '<div class="day-top"><span class="label">Day ' + d.n + "</span>" + status + "</div>" +
      "<h3>" + esc(d.title) + "</h3>" +
      '<p class="tagline">' + esc(d.tagline) + "</p>" +
      '<div class="day-foot"><span class="pill">~' + totalMinutes(d) + ' min</span><span class="pill">' + esc(mentors) + "</span></div>" +
      "</a>";
  }
  function renderHome() {
    var nd = nextDay();
    var built = C.days.filter(function (d) { return d.lesson; }).length;
    var doneCount = C.days.filter(dayComplete).length;
    var pct = Math.round(dayProgress(nd) * 100);
    var html = '<div class="wrap">' +
      '<section class="hero">' +
        '<div class="hero-copy">' +
          '<span class="label">Two weeks · 30 minutes a day</span>' +
          '<h1>Learn product management on <span class="mark">your own product</span>.</h1>' +
          "<p>Fourteen short lessons from the people who did it best, from Nikita Bier to Teresa Torres. Each day ends with a written assignment about Maro for Schools and Secure Links, so by Day 14 you have a real 90-day plan, not just notes.</p>" +
        "</div>" +
        '<div class="today">' +
          '<span class="label">' + (doneCount === C.days.length ? "Course complete" : "Up next · Day " + nd.n) + "</span>" +
          "<h2>" + esc(nd.title) + "</h2>" +
          '<p class="muted">' + esc(nd.tagline) + "</p>" +
          (nd.lesson ? '<div class="meter" aria-label="' + pct + '% done"><span style="width:' + pct + '%"></span></div>' : "") +
          '<div><a class="btn" href="#' + nd.id + '">' + (pct > 0 ? "Continue" : nd.lesson ? "Start Day " + nd.n : "See the outline") + " →</a></div>" +
          '<p class="muted" style="font-size:var(--step--1)">' + doneCount + " of " + C.days.length + " days done · " + built + " of " + C.days.length + " lessons built</p>" +
        "</div>" +
      "</section>";

    C.weeks.forEach(function (w) {
      html += '<section class="week" aria-labelledby="w' + w.n + '">' +
        '<div class="week-head"><span class="label">Week ' + w.n + '</span><h2 id="w' + w.n + '">' + esc(w.title) + "</h2><p>" + esc(w.summary) + "</p></div>" +
        '<div class="days">' + C.days.filter(function (d) { return d.week === w.n; }).map(dayCard).join("") + "</div>" +
        "</section>";
    });

    html += '<section class="faculty-strip"><span class="label">Your faculty</span><div class="faces">' +
      Object.keys(M).map(function (k) {
        return '<a class="face" href="#faculty"><span class="initials">' + initials(M[k].name) + "</span>" + esc(M[k].name) + "</a>";
      }).join("") + "</div></section></div>";
    return html;
  }

  // ---------- lesson ----------
  var KIND_LABEL = { brief: "Brief", read: "Read", watch: "Watch", "case": "Case study", quiz: "Quiz", write: "Write", bonus: "Bonus" };

  function segBody(day, seg, si) {
    var h = "";
    if (seg.kind === "watch") {
      h += '<a class="watch-card" href="' + esc(seg.url) + '" target="_blank" rel="noopener">' +
        '<span class="play" aria-hidden="true"><svg viewBox="0 0 10 12"><path d="M0 0l10 6-10 6z"/></svg></span>' +
        "<span><strong>" + esc(seg.title) + '</strong><span class="muted">' + esc(seg.source) + " · " + esc(seg.range) + "</span></span></a>";
    }
    if (seg.html) h += '<div class="prose">' + seg.html + "</div>";
    if (seg.kind === "watch" && seg.altUrl) {
      h += '<p class="muted" style="font-size:var(--step--1)">Prefer audio or reading? <a href="' + esc(seg.altUrl) + '" target="_blank" rel="noopener">' + esc(seg.altLabel) + "</a></p>";
    }
    if (seg.notesPrompt) h += textField(day.id, "seg" + si + "-notes", seg.notesPrompt, "", 4);
    if (seg.prompt) h += textField(day.id, "seg" + si + "-prompt", seg.prompt, "", 3);
    if (seg.kind === "quiz") h += quizHtml(day, seg, si);
    if (seg.kind === "write") {
      seg.fields.forEach(function (f) { h += textField(day.id, f.id, f.label, f.hint, f.rows); });
    }
    if (seg.kind === "bonus") {
      h += '<ul class="links">' + seg.links.map(function (l) {
        return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a><span class="by">' + esc(l.by) + " · " + esc(l.meta) + "</span></li>";
      }).join("") + "</ul>";
    }
    return h;
  }

  function textField(dayId, fid, label, hint, rows) {
    var id = "f-" + dayId + "-" + fid;
    var val = (state.writes[dayId] || {})[fid] || "";
    return '<div class="field"><label for="' + id + '">' + esc(label) + "</label>" +
      (hint ? '<span class="hint">' + esc(hint) + "</span>" : "") +
      '<textarea id="' + id + '" rows="' + (rows || 3) + '" data-day="' + dayId + '" data-field="' + fid + '">' + esc(val) + "</textarea>" +
      '<span class="saved" data-saved-for="' + id + '"></span></div>';
  }

  function quizHtml(day, seg, si) {
    var ans = (state.quiz[day.id] || {})[si] || {};
    var h = '<div class="quiz">';
    seg.questions.forEach(function (q, qi) {
      var picked = ans[qi];
      h += '<div class="q" role="group" aria-labelledby="q-' + si + "-" + qi + '"><p class="q-text" id="q-' + si + "-" + qi + '">' + (qi + 1) + ". " + esc(q.q) + '</p><div class="opts">';
      q.options.forEach(function (o, oi) {
        var cls = "opt";
        if (picked != null) {
          if (oi === q.answer) cls += " right";
          else if (oi === picked) cls += " wrong";
        }
        h += '<button type="button" class="' + cls + '" data-quiz="' + si + '" data-q="' + qi + '" data-o="' + oi + '"' + (picked != null ? " disabled" : "") + ">" +
          '<span class="key">' + "ABCD"[oi] + "</span><span>" + esc(o) + "</span></button>";
      });
      h += "</div>";
      if (picked != null) {
        h += '<p class="why"><strong>' + (picked === q.answer ? "Right. " : "Not quite. ") + "</strong>" + esc(q.why) + "</p>";
      }
      h += "</div>";
    });
    var sc = quizScore(day, si);
    if (sc.answered === sc.total) {
      h += '<div class="score"><strong>' + sc.right + "/" + sc.total + "</strong><span>" +
        (sc.right === sc.total ? "Perfect score." : sc.right >= sc.total - 1 ? "Strong. Reread the explanation you missed." : "Reread the lesson, then try again.") +
        '</span><button type="button" class="btn btn-ghost" data-retake="' + si + '">Retake quiz</button></div>';
    }
    return h + "</div>";
  }

  function renderLesson(day) {
    var L = day.lesson;
    var idx = C.days.indexOf(day);
    var prev = C.days[idx - 1], next = C.days[idx + 1];
    var counted = 0;
    var mentors = day.mentors.map(function (m) { return M[m].name; }).join(" · ");

    var h = '<div class="wrap"><div class="column">' +
      '<header class="lesson-head">' +
        '<p class="crumbs"><a href="#home">Course</a> / Week ' + day.week + " / Day " + day.n + "</p>" +
        "<h1>" + esc(day.title) + "</h1>" +
        '<p class="tagline">' + esc(day.tagline) + "</p>" +
        '<div class="lesson-meta"><span class="pill">~' + totalMinutes(day) + ' min</span><span class="pill">' + esc(mentors) + "</span></div>" +
        '<div><span class="label">By the end you can</span><ul class="goals">' + day.goals.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("") + "</ul></div>" +
      "</header>";

    h += '<nav class="track" aria-label="Lesson progress">' + L.segments.map(function (s, i) {
      if (s.kind === "bonus") return "";
      return '<a href="#' + day.id + '" data-jump="seg-' + i + '" class="' + (segDone(day.id, i) ? "done" : "") + '" title="' + esc(s.title) + '" aria-label="' + esc(s.title) + (segDone(day.id, i) ? " (done)" : "") + '"></a>';
    }).join("") + "</nav>";

    h += '<div class="segments">';
    L.segments.forEach(function (s, i) {
      var done = segDone(day.id, i);
      var isBonus = s.kind === "bonus";
      if (!isBonus) counted++;
      h += '<section class="seg' + (done ? " is-done" : "") + '" id="seg-' + i + '">' +
        '<div class="seg-head"><div style="flex:1 1 260px;min-width:0">' +
          '<div class="seg-kicker">' + (isBonus ? "" : '<span class="seg-num">' + counted + "</span>") +
          '<span class="label">' + KIND_LABEL[s.kind] + (s.minutes ? " · " + s.minutes + " min" : "") + "</span></div>" +
          "<h2>" + esc(s.title) + "</h2></div>" +
          (isBonus ? "" : '<button type="button" class="done-btn" data-done="' + i + '" aria-pressed="' + done + '">' + (done ? "✓ Done" : "Mark done") + "</button>") +
        "</div>" + segBody(day, s, i) + "</section>";
    });
    h += "</div>";

    h += '<aside class="bier" style="margin-top:22px"><span class="label">Bier rule of the day</span><blockquote>' + esc(L.bierRule) + '</blockquote><p class="muted">' +
      '<a href="' + esc(L.bierLink) + '" target="_blank" rel="noopener">' + esc(L.bierSource) + "</a></p></aside>";

    if (dayComplete(day)) {
      h += '<section class="finish"><span class="label">Day ' + day.n + ' complete</span><h2>Nice work. Your answers are in your playbook.</h2>' +
        "<p>Come back tomorrow for Day " + (next ? next.n + ": " + esc(next.title) : "") + ".</p>" +
        '<div class="toolbar"><a class="btn" href="#playbook">Open playbook</a>' + (next ? '<a class="btn btn-ghost" href="#' + next.id + '">Preview Day ' + next.n + "</a>" : "") + "</div></section>";
    }

    h += pager(prev, next) + "</div></div>";
    return h;
  }

  function pager(prev, next) {
    return '<nav class="pager" aria-label="Days">' +
      (prev ? '<a class="btn btn-ghost" href="#' + prev.id + '">← Day ' + prev.n + "</a>" : "<span></span>") +
      (next ? '<a class="btn btn-ghost" href="#' + next.id + '">Day ' + next.n + " →</a>" : "") + "</nav>";
  }

  function renderOutline(day) {
    var idx = C.days.indexOf(day);
    var mentors = day.mentors.map(function (m) { return M[m].name; }).join(" · ");
    return '<div class="wrap"><div class="column">' +
      '<header class="lesson-head">' +
        '<p class="crumbs"><a href="#home">Course</a> / Week ' + day.week + " / Day " + day.n + "</p>" +
        "<h1>" + esc(day.title) + "</h1>" +
        '<p class="tagline">' + esc(day.tagline) + "</p>" +
        '<div class="lesson-meta"><span class="pill pill-outline">Outline</span><span class="pill">~30 min</span><span class="pill">' + esc(mentors) + "</span></div>" +
      "</header>" +
      '<div class="outline-box">' +
        '<div><span class="label">By the end you can</span><ul class="goals">' + day.goals.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("") + "</ul></div>" +
        '<div><span class="label">Planned session</span><ol>' + day.outline.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ol></div>" +
        '<div><span class="label">Assignment</span><p>' + esc(day.assignment) + "</p></div>" +
        '<div><span class="label">Sources you’ll use</span><ul class="links">' + day.resources.map(function (l) {
          return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a><span class="by">' + esc(l.by) + "</span></li>";
        }).join("") + "</ul></div>" +
        '<div class="build-note"><strong>This lesson isn’t built yet.</strong><span>The sources above are ready to read now. To get the full interactive lesson, ask Claude: <code>Build Day ' + day.n + " of Maro PM School</code></span></div>" +
      "</div>" + pager(C.days[idx - 1], C.days[idx + 1]) + "</div></div>";
  }

  // ---------- playbook ----------
  function playbookEntries() {
    var out = [];
    C.days.forEach(function (d) {
      if (!d.lesson) return;
      var w = state.writes[d.id] || {};
      var items = [];
      d.lesson.segments.forEach(function (s, si) {
        if (s.notesPrompt && w["seg" + si + "-notes"]) items.push({ q: s.notesPrompt, a: w["seg" + si + "-notes"] });
        if (s.prompt && w["seg" + si + "-prompt"]) items.push({ q: s.prompt, a: w["seg" + si + "-prompt"] });
        if (s.kind === "write") s.fields.forEach(function (f) { if (w[f.id]) items.push({ q: f.label, a: w[f.id] }); });
      });
      out.push({ day: d, items: items });
    });
    return out;
  }
  function playbookText() {
    var lines = ["MARO PM SCHOOL — MY PLAYBOOK", ""];
    playbookEntries().forEach(function (e) {
      lines.push("Day " + e.day.n + ": " + e.day.title);
      if (!e.items.length) lines.push("  (nothing written yet)");
      e.items.forEach(function (it) { lines.push("", "Q: " + it.q, it.a); });
      lines.push("", "----", "");
    });
    return lines.join("\n");
  }
  function renderPlaybook() {
    var entries = playbookEntries();
    var h = '<div class="wrap"><div class="column"><header class="lesson-head">' +
      '<span class="label">Your playbook</span><h1>Everything you’ve written</h1>' +
      '<p class="tagline">Each assignment lands here. On Day 14 this becomes your 90-day plan. Copy it into a doc to share with your team.</p>' +
      '<div class="toolbar"><button type="button" class="btn" id="copy-pb">Copy playbook as text</button><span class="saved" id="copy-status"></span></div>' +
      "</header>";
    entries.forEach(function (e) {
      h += '<section class="pb-day"><span class="label">Day ' + e.day.n + "</span><h2>" + esc(e.day.title) + "</h2>";
      if (!e.items.length) h += '<p class="pb-empty">Nothing written yet. <a href="#' + e.day.id + '">Open Day ' + e.day.n + "</a></p>";
      e.items.forEach(function (it) {
        h += '<div class="pb-entry"><span class="label">' + esc(it.q) + '</span><div class="a">' + esc(it.a) + "</div></div>";
      });
      h += "</section>";
    });
    var later = C.days.filter(function (d) { return !d.lesson; });
    if (later.length) {
      h += '<section class="pb-day"><span class="label">Coming</span><p class="muted">' + later.length + " more assignments: " +
        later.map(function (d) { return esc(d.assignment.split(":")[0]); }).join(" · ") + ".</p></section>";
    }
    h += '<textarea class="copy-area" id="copy-fallback" readonly hidden aria-label="Playbook text"></textarea>';
    return h + "</div></div>";
  }

  // ---------- faculty ----------
  function renderFaculty() {
    var taught = {};
    C.days.forEach(function (d) { d.mentors.forEach(function (m) { (taught[m] = taught[m] || []).push(d); }); });
    var h = '<div class="wrap"><header class="lesson-head column" style="margin-left:0">' +
      '<span class="label">Faculty</span><h1>Who you’re learning from</h1>' +
      '<p class="tagline">Fifteen people whose work shaped how good products get built. Each card links to the best place to start.</p></header>' +
      '<div class="fac-grid">';
    Object.keys(M).forEach(function (k) {
      var m = M[k];
      var days = (taught[k] || []).map(function (d) { return '<a href="#' + d.id + '">Day ' + d.n + "</a>"; }).join(", ");
      h += '<article class="fac' + (k === "bier" ? " star" : "") + '"><div class="fac-top"><span class="initials">' + initials(m.name) + "</span><h3>" + esc(m.name) + "</h3></div>" +
        '<p class="muted">' + esc(m.role) + '</p><p class="lens">' + esc(m.lens) + "</p>" +
        (days ? '<p class="days-taught">Teaches ' + days + "</p>" : "") +
        '<p><a href="' + esc(m.link) + '" target="_blank" rel="noopener">Start here →</a></p></article>';
    });
    return h + "</div></div>";
  }

  // ---------- router ----------
  var app = document.getElementById("app");
  var current = "";
  function route(keepScroll) {
    var hash = (location.hash || "#home").slice(1) || "home";
    var view = hash, html;
    if (hash === "playbook") html = renderPlaybook();
    else if (hash === "faculty") html = renderFaculty();
    else {
      var d = dayById(hash);
      if (d) { html = d.lesson ? renderLesson(d) : renderOutline(d); view = "home"; }
      else { html = renderHome(); view = "home"; hash = "home"; }
    }
    app.innerHTML = html;
    setNav(view);
    renderStats();
    if (!keepScroll && hash !== current) window.scrollTo(0, 0);
    current = hash;
  }

  // Re-render the current view while keeping the reader's place.
  function refresh() {
    var y = window.scrollY;
    route(true);
    window.scrollTo(0, y);
  }

  // ---------- events ----------
  app.addEventListener("click", function (e) {
    var t = e.target.closest("button, a[data-jump]");
    if (!t) return;
    var day = dayById(current);

    if (t.hasAttribute("data-jump")) {
      e.preventDefault();
      var el = document.getElementById(t.getAttribute("data-jump"));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (t.hasAttribute("data-done") && day) {
      var i = +t.getAttribute("data-done");
      state.done[day.id] = state.done[day.id] || {};
      state.done[day.id][i] = !state.done[day.id][i];
      touch(); save(); refresh();
      return;
    }
    if (t.hasAttribute("data-quiz") && day) {
      var si = +t.getAttribute("data-quiz"), qi = +t.getAttribute("data-q"), oi = +t.getAttribute("data-o");
      state.quiz[day.id] = state.quiz[day.id] || {};
      state.quiz[day.id][si] = state.quiz[day.id][si] || {};
      state.quiz[day.id][si][qi] = oi;
      var sc = quizScore(day, si);
      if (sc.answered === sc.total) {
        state.done[day.id] = state.done[day.id] || {};
        state.done[day.id][si] = true;
      }
      touch(); save(); refresh();
      return;
    }
    if (t.hasAttribute("data-retake") && day) {
      var r = +t.getAttribute("data-retake");
      if (state.quiz[day.id]) delete state.quiz[day.id][r];
      save(); refresh();
      return;
    }
    if (t.id === "copy-pb") {
      var text = playbookText();
      var status = document.getElementById("copy-status");
      var fallback = function () {
        var ta = document.getElementById("copy-fallback");
        ta.value = text; ta.hidden = false; ta.focus(); ta.select();
        status.textContent = "Select all and copy from the box below.";
      };
      try {
        navigator.clipboard.writeText(text).then(function () { status.textContent = "Copied."; }, fallback);
      } catch (err) { fallback(); }
    }
  });

  var timers = {};
  app.addEventListener("input", function (e) {
    var t = e.target;
    if (t.tagName !== "TEXTAREA" || !t.hasAttribute("data-field")) return;
    var d = t.getAttribute("data-day"), f = t.getAttribute("data-field");
    state.writes[d] = state.writes[d] || {};
    state.writes[d][f] = t.value;
    clearTimeout(timers[t.id]);
    timers[t.id] = setTimeout(function () {
      touch(); save(); renderStats();
      var s = document.querySelector('[data-saved-for="' + t.id + '"]');
      if (s) s.textContent = "Saved";
    }, 400);
  });

  window.addEventListener("hashchange", function () { route(false); });
  route(false);
})();

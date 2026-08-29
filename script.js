/* ============================================================
   袁亚飞 · AI Agent 工程师 — 作品集脚本
   功能：移动端菜单、滚动导航阴影、淡入动画、当前区块高亮
   ============================================================ */
(function () {
  "use strict";

  // ---- 移动端菜单 ----
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    // 点击菜单项后自动收起
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // ---- 滚动：导航阴影 + 回到顶部状态 ----
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- 淡入动画（IntersectionObserver） ----
  var fadeEls = document.querySelectorAll(".project, .skill-card, .timeline-item, .about-card, .edu-card");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    fadeEls.forEach(function (el) {
      el.classList.add("fade-ready");
      io.observe(el);
    });
  }
})();

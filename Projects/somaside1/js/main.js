// ============================================================
//  main.js — Soma Side entry point
//  Detects current page via data-page on <body> and boots
//  only the relevant module. All pages share initNavbar().
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  const page = document.body.dataset.page;

  switch (page) {
    case "home":    initHome();    break;
    case "story":   initStory();   break;
    case "upload":  initUpload();  break;
    case "profile": initProfile(); break;
  }
});

// ============================================================
//  NAVBAR — shared across all pages
// ============================================================
function initNavbar() {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Close menu when a link is clicked (mobile)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("active");
    });
  });

  // Mark active link based on current page filename
  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentFile) link.classList.add("active");
  });
}

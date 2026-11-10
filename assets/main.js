(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  };
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        const menu = nav.querySelector(".nav-dropdown");
        if (menu) menu.open = false;
      }
    });
    document.addEventListener("click", event => {
      if (nav.classList.contains("is-open") && !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }
  const current = location.pathname.split("/").filter(Boolean).pop() || "index.html";
  document.querySelectorAll(".primary-nav a").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href.split("#")[0] === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
      const dropdown = link.closest(".nav-dropdown");
      if (dropdown) dropdown.classList.add("has-active");
    }
  });
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();

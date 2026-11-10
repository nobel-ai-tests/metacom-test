(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const dropdown = nav ? nav.querySelector(".nav-dropdown") : null;

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("is-open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        if (dropdown) dropdown.open = false;
      }
    });

    // Clicking away closes the mobile drawer and the "More" dropdown.
    document.addEventListener("click", event => {
      if (nav.classList.contains("is-open") && !nav.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
      if (dropdown && dropdown.open && !dropdown.contains(event.target)) {
        dropdown.open = false;
      }
    });
  }

  // Mark the link for the current page, including inside the "More" dropdown.
  const current = location.pathname.split("/").filter(Boolean).pop() || "index.html";
  document.querySelectorAll(".primary-nav a").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href.split("#")[0] === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
      if (dropdown && dropdown.contains(link)) dropdown.classList.add("has-active");
    }
  });

  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();

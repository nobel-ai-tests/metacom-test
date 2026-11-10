(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const navMarkup = `
    <a href="index.html">Home</a>
    <a href="call-for-papers.html">Call for Papers</a>
    <a href="program.html">Program</a>
    <a href="committees.html">Committees</a>
    <a href="registration.html">Registration</a>
    <a href="venue.html">Venue</a>
    <details class="nav-dropdown">
      <summary>More <span class="nav-chevron" aria-hidden="true"></span></summary>
      <div class="nav-dropdown-panel">
        <a href="author-information.html">Author Information</a>
        <a href="submissions.html">Submission Guidelines</a>
        <a href="main-conference-papers.html">Main Conference Papers</a>
        <a href="workshops.html">Workshops &amp; Tutorials</a>
        <a href="workshop-program.html">Workshop Program</a>
        <a href="posters-demos.html">Posters &amp; Demos</a>
        <a href="work-in-progress-papers.html">Work-in-Progress Papers</a>
        <a href="artifact-evaluation.html">Artifact Evaluation</a>
        <a href="student-research-competition.html">Student Research Competition</a>
        <a href="camera-ready.html">Camera-Ready Instructions</a>
        <a href="accepted-papers.html">Accepted Papers</a>
        <a href="keynotes.html">Keynote Speakers</a>
        <a href="technical-program-committee.html">Technical Program Committee</a>
        <a href="technical-panels.html">Technical Panels</a>
        <a href="visa-information.html">Visa Information</a>
        <a href="visa-letter-request.html">Visa Letter Request</a>
        <a href="travel-information.html">Travel Information</a>
        <a href="hotel-information.html">Hotel Information</a>
        <a href="local-information.html">Local Information</a>
        <a href="sponsorship.html">Sponsorship</a>
        <a href="awards.html">Awards</a>
        <a href="student-travel-grants.html">Student Travel Grants</a>
        <a href="code-of-conduct.html">Code of Conduct</a>
        <a href="important-dates.html">Important Dates</a>
        <a href="announcements.html">Announcements</a>
        <a href="contact.html">Contact</a>
        <a href="previous-years.html">Previous Years</a>
      </div>
    </details>
    <a class="nav-cta" href="announcements.html">Updates <span aria-hidden="true">↗</span></a>
  `;
  if (nav) nav.innerHTML = navMarkup;
  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  const currentFile = window.location.pathname.split("/").filter(Boolean).pop() || "index.html";
  navLinks.forEach((link) => {
    const target = (link.getAttribute("href") || "").split("#")[0];
    if (target && target === currentFile) {
      link.setAttribute("aria-current", "page");
      link.classList.add("active");
    }
  });

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
    });
    navLinks.forEach((link) => link.addEventListener("click", () => {
      closeMenu();
      const dropdown = nav.querySelector(".nav-dropdown");
      if (dropdown) dropdown.open = false;
    }));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", (event) => {
      if (nav.classList.contains("is-open") && !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === ("#" + entry.target.id);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
          link.classList.toggle("active", active);
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
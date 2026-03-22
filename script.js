const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__nav a");
const primaryLinks = document.querySelectorAll(".primary-nav a");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebarLinks.forEach((item) => item.classList.remove("is-current"));
    link.classList.add("is-current");
    if (sidebar) {
      sidebar.classList.remove("is-open");
    }
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

primaryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    primaryLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});

// --- GSAP ANIMATIONS ---
gsap.registerPlugin(ScrollTrigger);

// 1. Hero / Index Section (Plays immediately on load)
const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
heroTl
  .from(".ceramic-scene--hero", { y: 50, opacity: 0, duration: 1.2 })
  .from(".hero__tag", { y: 20, opacity: 0 }, "-=0.8")
  .from(".eyebrow", { x: -20, opacity: 0 }, "-=0.8")
  .from(".hero__content h2", { y: 30, opacity: 0 }, "-=0.8")
  .from(".hero__summary", { y: 20, opacity: 0 }, "-=0.8")
  .from(".hero__content .button", { y: 20, opacity: 0 }, "-=0.8");

// 2. Archive / Works Section
gsap.from(".section-header", {
  scrollTrigger: {
    trigger: ".works",
    start: "top 75%",
  },
  y: -30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".work-card, .archive-card", {
  scrollTrigger: {
    trigger: ".works-grid",
    start: "top 75%",
  },
  y: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

// 3. Process / Ethos Section
const ethosTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ethos",
    start: "top 65%",
  },
  defaults: { ease: "power3.out", duration: 1 },
});
ethosTl
  .from(".ethos__statement .eyebrow", { opacity: 0, x: -20 })
  .from(".ethos__statement h2", { opacity: 0, y: 30 }, "-=0.8")
  .from(".divider", { scaleX: 0, transformOrigin: "left center", duration: 0.8 }, "-=0.6")
  .from(".ethos__copy", { opacity: 0, y: 20 }, "-=0.6");

gsap.from(".process-item", {
  scrollTrigger: {
    trigger: ".ethos__process",
    start: "top 75%",
  },
  x: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
});

// 4. Contact / CTA Section
gsap.from(".cta__eyebrow", {
  scrollTrigger: { trigger: ".cta", start: "top 80%" },
  y: -20, opacity: 0, duration: 0.8, ease: "power2.out"
});

gsap.from(".cta__headline", {
  scrollTrigger: { trigger: ".cta", start: "top 80%" },
  y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
});

gsap.from(".cta-tile", {
  scrollTrigger: { trigger: ".cta__links", start: "top 85%" },
  y: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("change", function () {
  navbar.classList.toggle("active", this.checked);
  if (this.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

window.addEventListener("scroll", function () {
  navbar.classList.remove("active");
  menuIcon.checked = false;
  document.body.style.overflow = "";
});

let aboutBtn = document.querySelector("#aboutBtn");
let aboutMore = document.querySelector(".about-content .more");

let header = document.querySelector(".header");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  if (menuIcon.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

let navLinks = document.querySelectorAll(
  ".navbar .nav-link, .navbar a[href^='#']"
);
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.checked = false;
    document.body.style.overflow = "";
  });
});

let sections = document.querySelectorAll(".section");
let languageSelect = document.querySelector("#languageSelect");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document
        .querySelectorAll(".navbar .nav-link, .navbar a[href^='#']")
        .forEach((links) => {
          links.classList.remove("active");
          links.removeAttribute("aria-current");
        });
      const activeLink = document.querySelector(
        `header nav .nav-link[href*="${id}"], header nav a[href*="${id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
        activeLink.setAttribute("aria-current", "page");
      }
    }
  });

  header.classList.toggle("sticky", window.scrollY > 100);

  navbar.classList.remove("active");
};

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Sistema de animações ao scroll com Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px 5px 0px",
};

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      // Para elementos com delay específico, manter o delay
      const delay = entry.target.style.getPropertyValue("--delay");
      if (delay) {
        entry.target.style.transitionDelay = delay;
      }
      observer.unobserve(entry.target);
    }
  });
};

const scrollObserver = new IntersectionObserver(
  animateOnScroll,
  observerOptions
);

// Observar todos os elementos com classe animate-on-scroll
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale"
  );
  animateElements.forEach((el) => {
    scrollObserver.observe(el);
  });
});

// ScrollReveal para compatibilidade (mantido para elementos que já usam)
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".home-content, .heading", { origin: "bottom" });
  ScrollReveal().reveal(".home-img img, .contact form", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".home-content h1, about-img img", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
    origin: "bottom",
  });
}

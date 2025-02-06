let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let aboutBtn = document.querySelector("#aboutBtn");
let aboutMore = document.querySelector(".about-content .more");

let header = document.querySelector(".header");
header.style.display = "none";

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("header nav a");
let languageSelect = document.querySelectorAll("header nav select");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  header.style.display =
    window.scrollY > window.innerHeight + window.innerHeight * 0.48
      ? "flex"
      : "none";

  header.classList.toggle(
    "sticky",
    window.scrollY > window.innerHeight + window.innerHeight * 0.48 + 100
  );

  navbar.classList.remove("active");
};

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

ScrollReveal({
  distance: "80px",
  duration: 1000,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "bottom" });
ScrollReveal().reveal(".home-img img, .portfolio-box, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, about-img img", { origin: "bottom" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "bottom",
});

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let monitor = document.getElementById("monitor");
  let mouse = document.getElementById("mouse");

  let scaleValue = 1 + scrollPosition / 300;
  let opacityValue = Math.max(1 - scrollPosition / 200, 0);

  monitor.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
  monitor.style.opacity = opacityValue + 0.01;
  mouse.style.opacity = opacityValue - 0.4;
});

let isScrolling = false;
window.addEventListener("wheel", function (event) {
  if (window.innerWidth <= 968 || isScrolling) return;
  isScrolling = true;

  let sections = Array.from(document.querySelectorAll("section"));
  let currentSection = getCurrentSection(sections);
  let currentIndex = sections.indexOf(currentSection);

  let nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
  if (nextIndex < 0 || nextIndex >= sections.length) {
    isScrolling = false;
    return;
  }

  let nextSection = sections[nextIndex];
  window.scrollTo({
    top: nextSection.offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
  }, 800);
});

function getCurrentSection(sections) {
  let scrollPosition = window.scrollY + window.innerHeight / 4;
  return sections.reduce((closest, section) => {
    let offset = Math.abs(section.offsetTop - scrollPosition);
    return offset < Math.abs(closest.offsetTop - scrollPosition)
      ? section
      : closest;
  });
}

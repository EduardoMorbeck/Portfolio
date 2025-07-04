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

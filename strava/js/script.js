const headerEl = document.querySelector(".header-section");
const mobileNavEl = document.querySelector(".mobile-nav-btn");

mobileNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("open-nav");
});

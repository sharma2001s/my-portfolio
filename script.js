// const themeToggle = document.getElementById("theme-toggle");
// const menuBtn = document.getElementById("menu-btn");
// const navList = document.querySelector("nav ul");

// // Theme toggle
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("light-mode");
//   themeToggle.textContent =
//     document.body.classList.contains("light-mode") ? "☀️" : "🌙";
// });

// // Mobile menu toggle
// menuBtn.addEventListener("click", () => {
//   navList.classList.toggle("active");
// });
// const toggle = document.getElementById('theme-toggle');
// toggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark')

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});



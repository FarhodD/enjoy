// BURGER
const menuBtn = document.querySelector(".burger__menu"),
  submenu = document.querySelector(".menu");

function toggleMenu() {
  menuBtn.classList.toggle("opened-burger");
  submenu.classList.toggle("vis__menu");
}
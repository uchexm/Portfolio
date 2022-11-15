
const menu = document.querySelector("#mobile-menu");
const menuItem = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
  menu.classList.toggle("is-active");
  menuItem.classList.toggle("active");
})
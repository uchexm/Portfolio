const menu = document.querySelector('#mobile-menu');
const menuItem = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuItem.classList.toggle('active');
});

menuItem.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuItem.classList.toggle('active');
});
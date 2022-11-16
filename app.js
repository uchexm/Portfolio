const menu = document.querySelector('#mobile-menu');
const menuItem = document.querySelector('.nav-menu');
const popup = document.querySelector('#pop');
const mcard = document.querySelector('.modal-card');
const cross = document.querySelector('#ex');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuItem.classList.toggle('active');
});

menuItem.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuItem.classList.toggle('active');
});

popup.addEventListener('click', () => {
  popup.classList.toggle('is-active');
  mcard.classList.toggle('active');
});

cross.addEventListener('click', () => {
  cross.classList.toggle('is-active');
  mcard.classList.toggle('active');
})
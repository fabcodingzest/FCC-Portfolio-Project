const menuBox = document.querySelector('.hamburger--menu');
const navList = document.querySelector('.mobile__nav--list');

menuBox.addEventListener('click', e => {
  e.preventDefault();
  navList.classList.toggle('open');
  menuBox.classList.toggle('active');
})
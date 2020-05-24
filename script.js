const menuBox = document.querySelector('.hamburger--menu');
const navList = document.querySelector('.mobile__nav--list');
const arrow = document.querySelector('.about__arrow');

menuBox.addEventListener('click', e => {
  e.preventDefault();
  navList.classList.toggle('open');
  menuBox.classList.toggle('active');
})

arrow.addEventListener('click', e => {
  e.preventDefault();
  arrow.classList.toggle('up-arrow');
  document.querySelector('.about__text').classList.toggle('full-about')
} )
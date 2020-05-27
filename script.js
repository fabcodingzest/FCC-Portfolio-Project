const menuBox = document.querySelector('.hamburger--menu');
const navList = document.querySelector('.mobile__nav--list');
const arrow = document.querySelector('.fa-chevron-circle-down');

menuBox.addEventListener('click', e => {
  e.preventDefault();
  navList.classList.toggle('open');
  menuBox.classList.toggle('active');
})

document.querySelectorAll('.mobile__nav--links').forEach(link => link.addEventListener('click', () => {
  navList.classList.remove('open');
  menuBox.classList.remove('active')
}));

arrow.addEventListener('click', () => {
  arrow.classList.toggle('up-arrow');
  document.querySelector('.about__text').classList.toggle('full-about')
} )
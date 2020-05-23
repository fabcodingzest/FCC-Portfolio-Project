const menuBox = document.querySelector('.mobile__nav--menu');

menuBox.addEventListener('click', e => {
  e.preventDefault();
  menuBox.classList.toggle('active');
})
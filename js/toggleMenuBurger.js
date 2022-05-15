const menuIcon = document.querySelector('.menu-icon');
const menuBar = document.querySelector ('.burger__menu');

const menuIconSrc = menuIcon.getAttribute('src');

menuIcon.addEventListener('click', function () {

	menuBar.classList.toggle('hidden');
});





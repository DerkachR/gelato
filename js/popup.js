const orderBtn = document.querySelector('.order__button');
const popup = document.querySelector('#checkout');
const closeBtn = document.querySelector('.close');
const popupBody = document.querySelector('.popup__body');

console.log(popupBody);

orderBtn.addEventListener('click', function() {

	popup.classList.remove('hidden');
})

closeBtn.addEventListener('click', function () {

	popup.classList.add('hidden')
})
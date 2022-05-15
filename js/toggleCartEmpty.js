function toggleCartEmpty () {

	const emptyBadge = document.querySelector('[data-cart-empty]')

	const cartWrapper = document.querySelector('.cart__card');
	const priceAmmount = cartWrapper.querySelector('.total-number').innerHTML;
	console.log(priceAmmount);

	if (priceAmmount > 1) {
		emptyBadge.classList.add('d-none');
	} else {emptyBadge.classList.remove('d-none');};
};
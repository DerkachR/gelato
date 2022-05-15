function totalPriceCalc () {

	const cartWrapper = document.querySelector('.cart__card');
	const cartItems = cartWrapper.querySelectorAll('.cart__card-item');
	const totalPriceElement = document.querySelector('.total-number');

	let totalPrice = 0;

	cartItems.forEach(function (item) {

		const amountElement = item.querySelector('[data-counter]');
		const priceElement = item.querySelector('.price');
		const currentPrice = parseInt(amountElement.innerHTML) * parseInt(priceElement.innerHTML);

		totalPrice = totalPrice + currentPrice;
	});

	totalPriceElement.innerHTML = totalPrice;
};
window.addEventListener('click', function (event){

	let counter;

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

		const counterWrapper = event.target.closest('.icecream-action');
		
		counter = counterWrapper.querySelector('[data-counter]');
	};

	if (event.target.dataset.action === 'plus') {
		counter.innerHTML = ++counter.innerHTML;
	}

	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.innerHTML) > 1) {
			counter.innerHTML = --counter.innerHTML;
		} else if (event.target.closest('.cart__card') && parseInt(counter.innerHTML) === 1) {

			event.target.closest('.cart__card-item').remove();

		};
		totalPriceCalc();
	};

	if (event.target.hasAttribute('data-action') && event.target.closest('.cart__card-item')) {
		totalPriceCalc();

		toggleCartEmpty ();
	}

});

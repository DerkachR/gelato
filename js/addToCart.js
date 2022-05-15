const cartWrapper = document.querySelector('.cart__card')
// console.log(cartWrapper);

window.addEventListener('click', function (event) {

	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.item__card')

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.icecream-pic').getAttribute('src'),
			title: card.querySelector('.icecream-title').innerHTML,
			weight: card.querySelector('.icecream-info').innerHTML,
			price: card.querySelector('.price').innerHTML,
			counter: card.querySelector('[data-counter]').innerHTML,
		};

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
		
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');

			counterElement.innerHTML = parseInt(counterElement.innerHTML) + parseInt(productInfo.counter);
		} else {

			const cartItemHTML = `<div data-id="${productInfo.id}" class="cart__card-item">
						
			<div class="cart__card-pic"><img src="${productInfo.imgSrc}" alt="strawberry" class="cart__card-thumb"></div>
	
			<div class="cart__card-info">
			<h5 class="cart__card-title">${productInfo.title}</h5>
			<h6 class="cart__card-weight">${productInfo.weight}</h6>
			<div class="counter__wrapper">
				<div class="icecream-action">
					<div class="icecream__counter-wrapper">
						<div class="counter-control" ><img data-action="minus" src="./images/svg/ico-minus.svg" alt="minus" class="couter-control__minus"></div>
						<div class="icecream__control number" data-counter>${productInfo.counter}</div>
						<div class="counter-control" ><img data-action="plus" src="./images/svg/ico-plus.svg" alt="plus" class="couter-control__plus"></div>
					</div>
				</div>
				<div class="counter__price">${productInfo.price}</div>
			</div>
	
			</div>
			
		</div>`
	
		cartWrapper.insertAdjacentHTML('afterbegin', cartItemHTML)
		}


		card.querySelector('[data-counter]').innerHTML = 1;

		totalPriceCalc ();
		
		toggleCartEmpty ();

	}

});
export function flipCard() {
	const cardInner = document.querySelector('.card-inner')

	cardInner.classList.toggle('is-flipped')
}
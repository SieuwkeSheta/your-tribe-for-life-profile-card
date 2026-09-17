export function flipCard() {
	const cardInner = document.querySelector('.card-inner')

	cardInner.classList.toggle('is-flipped')
}

export function switchTheme() {
    const html = document.documentElement

    if (html.classList.contains('dark-mode')) {
		html.classList.remove('dark-mode')
		html.classList.add('light-mode')
	} else {
		html.classList.remove('light-mode')
		html.classList.add('dark-mode')
	}
}
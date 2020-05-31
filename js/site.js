// Sticky nav
let hasBeenStuckBefore = false
let heroLogoMark = null
window.addEventListener('scroll', function (e) {
	const shouldMoveLogoToHeader = window.scrollY > 180
	heroLogoMark = heroLogoMark ?? document.querySelector('.hero-logoMark')

	if (shouldMoveLogoToHeader) {
		hasBeenStuckBefore = true
		heroLogoMark.classList.remove('is-unsticky')
		heroLogoMark.classList.add('is-sticky')
	} else if (!shouldMoveLogoToHeader && hasBeenStuckBefore) {
		heroLogoMark.classList.remove('is-sticky')
		heroLogoMark.classList.add('is-unsticky')
	}

	document
		.querySelector('.topNav')
		.classList.toggle('is-sticky', window.scrollY > 0)
})
window.dispatchEvent(new Event('scroll'))

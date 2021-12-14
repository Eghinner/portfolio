const bar = document.querySelector('ul')
const burger = document.querySelector('.fa-bars')

if (window.matchMedia("(max-width: 900px)").matches) {
  bar.style.display = 'none'
} else {
  bar.style.display = 'flex'
}

burger.addEventListener('click', () => show())

function show() {
	console.log('hey')
	if (bar.style.display === 'none') {
		bar.style.display = 'flex'
		burger.style.position = 'fixed'
	} else {
		bar.style.display = 'none'
		burger.style.position = 'static'
	}
}
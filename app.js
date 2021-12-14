const bar = document.querySelector('ul')
const burger = document.querySelector('.fa-bars')

bar.style.display = 'none'
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
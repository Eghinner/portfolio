const bar = document.getElementById('bar')
const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuOpen = !menuOpen;
    show()
});

var mql = window.matchMedia("(max-width: 900px)")

function screenTest(e) {
	if (e.matches) {
		menuBtn.classList.replace('hidden', 'show')
	} else {
		menuBtn.classList.replace('show', 'hidden')
	}
}
mql.addListener(screenTest);


function show() {
	bar.classList.toggle('des')
}
// if (menuOpen) {
// 	window.addEventListener('click', function (event) {
// 		if (event.target !== bar) {
// 		  show()
// 		}
// 	})
// 	menuOpen = false;
// }

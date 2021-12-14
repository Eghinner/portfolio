const divas = document.querySelectorAll('.bolita')

const random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

let random_x = 0
let random_y = 0

var id = setInterval(()=>frame(), 10000)

function frame() {
	for ( let h=0; h < divas.length; h++ ) {
		const position = {top: divas[h].offsetTop, left: divas[h].offsetLeft}
		random_x = random(0, 80)
		random_y = random(0, 80)
		divas[h].style.top = random_x + '%'
		divas[h].style.left =  random_y + '%'
	}
}
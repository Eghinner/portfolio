const bar = document.querySelector('ul')
const burger = document.querySelector('nav .fa-bars')
const times = document.querySelector('nav .fa-times')

const
go_projects = document.querySelector('#go_projects'),
go_skills = document.querySelector('#go_skills'),
go_contact = document.querySelector('#go_contact')

const
projects = document.querySelector('#projects'),
skills = document.querySelector('#skills'),
contact = document.querySelector('#contact')

go_projects.addEventListener('click', ()=> {
	// show()
	projects.scrollIntoView({behavior: "smooth"})
})
go_skills.addEventListener('click', ()=> {
	// show()
	skills.scrollIntoView({behavior: "smooth"})
})
go_contact.addEventListener('click', ()=> {
	// show()
	contact.scrollIntoView({behavior: "smooth"})
})

var mql = window.matchMedia("(max-width: 900px)")

function screenTest(e) {
	if (e.matches) {
		burger.classList.replace('hidden', 'show')
		// bar.classList.add('bar')
	} else {
		burger.classList.replace('show', 'hidden')
		// bar.classList.remove('bar')
	}
}
mql.addListener(screenTest);

burger.addEventListener('click', () => show())

function show() {
	bar.classList.toggle('des')
}


let slideIndex = 1;
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
next.addEventListener('click', e => {
	e.preventDefault()
	plusSlides(1)
})
prev.addEventListener('click', e => {
	e.preventDefault()
	plusSlides(-1)
})
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("project");
	if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
			for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
	slides[slideIndex-1].style.display = "block";
}

const
	form = document.querySelector('form'),
	name = document.querySelector('#name'),
	email = document.querySelector('#email'),
	descript = document.querySelector('#descript')

form.addEventListener('submit', e => {
	e.preventDefault()

	Email.send({
		SecureToken: 'd806dc07-bc8f-44ff-b6a0-421b4d8a6981',
		From : 'eghinner@gmail.com',
		To : 'ensohernandez63@gmail.com',
		Subject : 'Alerta que camina!',
		Body : `
			<h1>Hey, bro!</h1>
			<h3>This is the content</h3>
			<ul>
			<li>Contact's Name: <span style="color=red">${name.value}</span></li>
			<li>Contact's Email: <span style="color=red">${email.value}</span></li>
			<li>Contact's Desc: <span style="color=red">${descript.value}</span></li>
			</ul>
			`
		}).then(
		// message =>
		Swal.fire(
			'Thanks!',
			'Your message has been sent',
			'success'
			)
		)
		name.value = ''
		email.value = ''
		descript.value = ''
})

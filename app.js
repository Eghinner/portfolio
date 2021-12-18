const bar = document.querySelector('ul')
const burger = document.querySelector('nav .fa-bars')
const times = document.querySelector('nav .fa-times')

const
about_me = document.querySelector('#about_me'),
go_projects = document.querySelector('#go_projects'),
go_skills = document.querySelector('#go_skills'),
go_contact = document.querySelector('#go_contact')

const
about = document.querySelector('#about'),
projects = document.querySelector('#projects'),
skills = document.querySelector('#skills'),
contact = document.querySelector('#contact')

about.addEventListener('click', ()=> {
	// show()
	about_me.scrollIntoView({behavior: "smooth"})
})
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

function IsEmail(email) {
	return /^[a-z0-9]+\.?\w*@[a-z]+(\.\w{2,3})?\.\w{2,4}$/.test(email);
}

const
	form = document.querySelector('form'),
	name = document.querySelector('#name'),
	email = document.querySelector('#email'),
	descript = document.querySelector('#descript')

form.addEventListener('submit', e => {
	e.preventDefault()
	if (name.value.trim()==='') return
	if (email.value.trim()==='' || !IsEmail(email.value)) return
	if (descript.value.trim()==='') return

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

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
	var slides = document.getElementsByClassName("project");
	if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}

			slides[slideIndex-1].style.display = "block";
		}

		const form = document.querySelector('form')

		form.addEventListener('submit', e => {
			e.preventDefault()
			Email.send({
				SecureToken: '0d716887-66d6-49aa-904d-529b39112247',
				To : "eghinner@gmail.com",
				From : 'eghinner@gmail.com',
				Subject : "This is the subject",
				Body : "And this is the body"
			}).then(
			message => alert(message)
			);
	// reset()
			return false
		})

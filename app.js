const bar = document.querySelector('ul')
const burger = document.querySelector('.fa-bars')

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


// if (window.matchMedia("(max-width: 900px)").matches) {
// 	bar.style.display = 'none'
// } else {
// 	bar.style.display = 'flex'
// }

burger.addEventListener('click', () => show())

function show() {
	if (bar.style.display === 'none') {
		bar.style.display = 'flex'
	} else {
		bar.style.display = 'none'
	}
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

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
	show()
	projects.scrollIntoView({behavior: "smooth"})
	})
go_skills.addEventListener('click', ()=> {
	show()
	skills.scrollIntoView({behavior: "smooth"})
	})
go_contact.addEventListener('click', ()=> {
	show()
	contact.scrollIntoView({behavior: "smooth"})
	})


if (window.matchMedia("(max-width: 900px)").matches) {
	bar.style.display = 'none'
} else {
	bar.style.display = 'flex'
}

burger.addEventListener('click', () => show())

function show() {
	if (bar.style.display === 'none') {
		bar.style.display = 'flex'
		// burger.style.position = 'fixed'
	} else {
		bar.style.display = 'none'
		// burger.style.position = 'static'
	}
}
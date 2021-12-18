const sun = document.querySelector('.fa-sun')

sun.addEventListener('click', () => {
	if (document.documentElement.className === 'light_theme') {
		document.documentElement.classList.replace('light_theme','dark_theme')
	} else {
		document.documentElement.classList.replace('dark_theme','light_theme')
	}
})
// import TOKEN from './config.js'

const
    form = document.querySelector('form'),
    input_name = document.querySelector('#name'),
    input_email = document.querySelector('#email'),
    input_desc = document.querySelector('#descript')

form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const name = input_name.value.trim();
    const email = input_email.value.trim();
    const desc = input_desc.value.trim();

    if (
        name.length === 0 ||
        desc.length === 0 ||
        email.length === 0 ||
        !IsEmail(email)
    ) {
        return;
    } else {
        Email.send({
            SecureToken: TOKEN,
            From: 'eghinner@gmail.com',
            To: 'ensohernandez63@gmail.com',
            Subject: 'Alerta que camina!',
            Body: `
				<h1>Hey, me!</h1>
				<h3>This is the content</h3>
				<ul>
				<li>Contact's Name: <span style="color=red">${input_name.value}</span></li>
				<li>Contact's Email: <span style="color=red">${input_email.value}</span></li>
				<li>Contact's Desc: <span style="color=red">${input_desc.value}</span></li>
				</ul>
				`
        }).then(
            Swal.fire(
                'Thanks!',
                'Your message has been sent',
                'success'
            )
        )
        input_name.value = ''
        input_email.value = ''
        input_desc.value = ''
    }
};

function IsEmail(email) {
    return /^[a-z0-9]+\.?\w*@[a-z]+(\.\w{2,3})?\.\w{2,4}$/.test(email);
}
/* Show manu */

const showMenu = (toggledId, navId) => {

    const toggle = document.getElementById(toggledId);
    nav = document.getElementById(navId);

    if(toggle && nav) {

        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav_link') //array

function linkAction() {

    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// Efeitos

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    durantion: 2000,
    reset: true
})

sr.reveal('.home_title', {})

sr.reveal('.button', {delay: 200})
sr.reveal('.home_img', {delay: 400})
sr.reveal('.home_social-icon', {interval: 200})


sr.reveal('.about-img', {})

sr.reveal('.about_subtitle', {delay: 200})
sr.reveal('.about_text', {delay: 400})

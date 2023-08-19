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
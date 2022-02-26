// Target Variables
const hamburger = document.querySelector('.hamburger');
const nav_container = document.querySelector('.nav-links-container');

function hamburger_click () {
    nav_container.classList.toggle('nav-links-container--active');
}

hamburger.addEventListener('click', hamburger_click);
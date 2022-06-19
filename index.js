const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navigation__list');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('navigation__list--visible');
})




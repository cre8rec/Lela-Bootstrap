const navbarDark = document.querySelector('.navbar-dark')
const navbarToggler = document.querySelector('.navbar-toggler')
const mq = window.matchMedia( "(min-width: 990px)" );
const footer = document.querySelector('.footer');


window.addEventListener('scroll', () => {
    if ($(document).scrollTop() > 50) {
    navbarDark.style.backgroundColor = 'black'
    
} else {
    navbarDark.style.backgroundColor = 'transparent'
    
}
})


navbarDarker = () => {
    
    if (navbarDark.style.backgroundColor !== 'black') {
    navbarDark.style.backgroundColor = 'black'
    } else if ($(document).scrollTop() > 100) {
        navbarDark.style.backgroundColor = 'black'
    } else {
        navbarDark.style.backgroundColor = 'transparent'
    }
}

$('.navbar-nav>li>a').on('click', function(){

    $('.navbar-collapse').collapse('hide');
    navbarDarker();
    
});



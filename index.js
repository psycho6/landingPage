


//Hamburger menu actvation:
const hamMenu = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
const lines = document.querySelectorAll('.line');
function toggleActive (){
    lines.forEach(line => line.classList.toggle('active'));
    menu.classList.toggle('menu-active');
}
hamMenu.addEventListener('click', toggleActive);


//Sticky white nav-bar:
const   navbar = document.querySelector('.nav-bar');
const  navItem = document.querySelectorAll('.nav-item');

function toggleOnScroll (){
    navbar.classList.toggle('on-scroll',window.scrollY > 0);
    navItem.classList.add('scroll');
}
window.addEventListener('scroll', toggleOnScroll);

//order and view detils button on product panels

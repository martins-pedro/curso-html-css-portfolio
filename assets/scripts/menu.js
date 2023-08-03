const closeMenu = document.querySelector('.closeMenu')
const menuOn = document.querySelector('.mainNav')
const menuOpen = document.querySelector('.menuBurguer')

menuOpen.addEventListener('click', function() {
    menuOn.classList.add('-open');
});

closeMenu.addEventListener('click', function() {
    menuOn.classList.remove("-open");
});
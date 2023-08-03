const closeMenu = document.querySelector('.closeMenu')
const menuOn = document.querySelector('.mainNav')
const menuOpen = document.querySelector('.menuBurguer')


closeMenu.addEventListener('click', function() {
    menuOn.style = "display: none";
});

menuOpen.addEventListener('click', function() {
    menuOn.style = "display: flex"
})
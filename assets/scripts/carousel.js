const btnRight = document.querySelector('.arrow-btn.-right');
const btnLeft = document.querySelector('.arrow-btn.-left'); 
const carousel = document.querySelector('.emmetCard');
let pixels = 0;

btnRight.addEventListener('click', function() {
    pixels = pixels - 100;
    carousel.style = `transform: translateX(${pixels}px)`
});

btnLeft.addEventListener('click', function() {
    pixels = pixels + 100;
    carousel.style = `transform: translateX(${pixels}px)`
})
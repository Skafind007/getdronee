const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const prev = document.querySelector('.arrow-left');
const next = document.querySelector('.arrow-right');
let currentIndex = 0;

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
currentIndex = (currentIndex + 1) % slideCount;
updateSlide();
}
function prevSlide() {
currentIndex = (currentIndex - 1 + slideCount) % slideCount;
updateSlide();
}
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


setInterval(nextSlide, 6000);
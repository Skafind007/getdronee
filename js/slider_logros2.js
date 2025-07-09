document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider-capacitacion2 .slide2');
    const dots = document.querySelectorAll('.slider-capacitacion2 .dot2');
    let current = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        current = index;
    }

    function nextSlide() {
        let next = (current + 1) % slides.length;
        showSlide(next);
    }

    function startSlider() {
        interval = setInterval(nextSlide, 4000);
    }
    function stopSlider() {
        clearInterval(interval);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            stopSlider();
            startSlider();
        });
    });

    showSlide(0);
    startSlider();

    const slider = document.querySelector('.slider-capacitacion2');
    if (slider) {
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
    }
});
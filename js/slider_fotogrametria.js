document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.fade-slider .slide');
    const dots = document.querySelectorAll('.fade-slider .dot');
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

    // Auto play
    function startSlider() {
        interval = setInterval(nextSlide, 5000);
    }
    function stopSlider() {
        clearInterval(interval);
    }

    // Dots click
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            stopSlider();
            startSlider();
        });
    });

    // Iniciar slider
    showSlide(0);
    startSlider();

    // Opcional: Pausar al pasar el mouse
    const slider = document.querySelector('.fade-slider');
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
});
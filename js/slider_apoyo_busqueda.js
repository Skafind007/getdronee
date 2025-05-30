document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slider-simple .slide');
  const prevBtn = document.querySelector('.slider-simple .prev');
  const nextBtn = document.querySelector('.slider-simple .next');
  let current = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startSlider() {
    stopSlider();
    if (slides.length > 1) {
      interval = setInterval(nextSlide, 5000);
    }
  }
  function stopSlider() {
    if (interval) clearInterval(interval);
  }

  if (nextBtn && prevBtn && slides.length > 1) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startSlider();
    });
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startSlider();
    });
  }

  showSlide(0);
  startSlider();

  const slider = document.querySelector('.slider-simple');
  if (slider && slides.length > 1) {
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
  }
});
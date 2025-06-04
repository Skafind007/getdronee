document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.video-slide');
  const dots = document.querySelectorAll('.video-dot');
  const leftArrow = document.querySelector('.video-arrow.left');
  const rightArrow = document.querySelector('.video-arrow.right');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      // Pausa todos los videos menos el activo
      const video = slide.querySelector('video');
      if (i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    current = index;
  }

  leftArrow.addEventListener('click', () => {
    let idx = (current - 1 + slides.length) % slides.length;
    showSlide(idx);
  });

  rightArrow.addEventListener('click', () => {
    let idx = (current + 1) % slides.length;
    showSlide(idx);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  showSlide(0);
});
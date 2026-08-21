document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.service-card');

  function animateCardsOnScroll() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calcula el porcentaje de visibilidad de la tarjeta
      let visible = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const cardHeight = rect.height;
        const visiblePx = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        visible = Math.max(0, Math.min(1, visiblePx / cardHeight));
      }

      // Interpolación: cuando visible=0 => translateY:60px, opacity:0; visible=1 => translateY:0, opacity:1
      const translateY = 60 * (1 - visible);
      const opacity = visible;

      anime({
        targets: card,
        translateY: translateY,
        opacity: opacity,
        duration: 400,
        easing: 'easeOutQuad'
      });
    });
  }

  window.addEventListener('scroll', animateCardsOnScroll);
  window.addEventListener('resize', animateCardsOnScroll);
  animateCardsOnScroll(); // Inicial
});
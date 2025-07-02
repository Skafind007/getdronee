document.addEventListener('DOMContentLoaded', function() {
    // Zoom animado al hacer click en galería
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function() {
            if(document.querySelector('.img-zoom')) return;
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.85)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = 9999;
            overlay.className = 'img-zoom';
            const bigImg = document.createElement('img');
            bigImg.src = img.src;
            bigImg.alt = img.alt;
            bigImg.style.maxWidth = '90vw';
            bigImg.style.maxHeight = '90vh';
            bigImg.style.borderRadius = '18px';
            bigImg.style.boxShadow = '0 8px 48px #000a';
            bigImg.style.animation = 'zoomIn 0.5s cubic-bezier(.77,0,.18,1)';
            overlay.appendChild(bigImg);
            overlay.onclick = () => overlay.remove();
            document.body.appendChild(overlay);
        });
    });

    // Galería con animación fade-slide personalizada y más lenta
    const images = [
        "img/MED2.jpEg",
        "img/MED3.png",
        "img/ESP1.png",
 
    ];
    let current = 0;
    const slider = document.getElementById('gallery-slider');
    const dots = document.querySelectorAll('.gallery-dot');

    function showImage(idx) {
        slider.classList.remove('animated-gallery');
        void slider.offsetWidth; // trigger reflow
        slider.src = images[idx];
        slider.classList.add('animated-gallery');
        dots.forEach((d,i)=>d.classList.toggle('active',i===idx));
        current = idx;
    }

    let sliderInterval = setInterval(() => {
        let next = (current + 1) % images.length;
        showImage(next);
    }, 4200); // Más lento

    dots.forEach((dot, idx) => {
        dot.onclick = () => {
            clearInterval(sliderInterval);
            showImage(idx);
            sliderInterval = setInterval(() => {
                let next = (current + 1) % images.length;
                showImage(next);
            }, 4200);
        };
    });
});
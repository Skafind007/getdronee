// Animación solo para touch, no para hover PC
document.querySelectorAll('.carnet').forEach(function(card) {
    let anim;
    card.addEventListener('touchstart', function(e){
        if(anim) anim.pause();
        anim = anime({
            targets: card,
            scale: 1.12,
            boxShadow: [
                { value: '0 16px 40px 0 rgba(0,0,0,0.25), 0 2px 8px 0 #ff9800' }
            ],
            duration: 350,
            easing: 'easeOutElastic(1, .7)'
        });
    }, {passive:true});
    card.addEventListener('touchend', function(e){
        if(anim) anim.pause();
        anim = anime({
            targets: card,
            scale: 1,
            boxShadow: [
                { value: '0 4px 16px rgba(0,0,0,0.15)' }
            ],
            duration: 350,
            easing: 'easeOutExpo'
        });
    }, {passive:true});
    card.addEventListener('touchcancel', function(e){
        if(anim) anim.pause();
        anim = anime({
            targets: card,
            scale: 1,
            boxShadow: [
                { value: '0 4px 16px rgba(0,0,0,0.15)' }
            ],
            duration: 350,
            easing: 'easeOutExpo'
        });
    }, {passive:true});
});
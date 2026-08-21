document.addEventListener('DOMContentLoaded', function() {
    const contenedores = document.querySelectorAll('.contenedor');
    
    contenedores.forEach(contenedor => {
        const textoVisible = contenedor.querySelector('.texto-visible');
        const textoOculto = contenedor.querySelector('.texto-oculto');
        
        textoVisible.addEventListener('click', function() {
            textoOculto.classList.toggle('disable');
            contenedor.classList.toggle('activo');
        });
        
        textoVisible.style.cursor = 'pointer';
    });
});
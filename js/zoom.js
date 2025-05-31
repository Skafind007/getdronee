let zoom = 1;
const ZOOM_STEP = 0.1;
const ZOOM_MIN = 1;
const ZOOM_MAX = 2.5;

function applyZoom() {
    // Aplica el zoom solo a las imágenes de las páginas visibles
    $('#flipbook .page').each(function() {
        if ($(this).is(':visible')) {
            $(this).find('img').css('transform', `scale(${zoom})`);
        } else {
            $(this).find('img').css('transform', 'scale(1)');
        }
    });
}

// Aplica el zoom al cambiar de página
$("#flipbook").on("turned turning", function() {
    applyZoom();
});

// Botones de zoom
$('#zoomIn').on('click', function() {
    if (zoom < ZOOM_MAX) {
        zoom += ZOOM_STEP;
        applyZoom();
    }
});
$('#zoomOut').on('click', function() {
    if (zoom > ZOOM_MIN) {
        zoom -= ZOOM_STEP;
        applyZoom();
    }
});

// Aplica el zoom inicial
applyZoom();
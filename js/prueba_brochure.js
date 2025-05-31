
$(document).ready(function () {

    function getDisplayMode() {
        return window.innerWidth <= 700 ? 'single' : 'double';
    }

    function getFlipbookWidth() {
    return window.innerWidth <= 700 ? 350 : 1000; // Antes 1000
}
function getFlipbookHeight() {
    return window.innerWidth <= 700 ? 500 : 700; // Antes 700
}

    function initFlipbook() {
        if ($("#flipbook").data('turn')) {
            $("#flipbook").turn('destroy');
        }
        $("#flipbook").turn({
            width: getFlipbookWidth(),
            height: getFlipbookHeight(),
            autoCenter: false,
            display: getDisplayMode()
        });
    }

    
    initFlipbook();

    let lastMode = getDisplayMode();
    window.addEventListener('resize', function () {
        const currentMode = getDisplayMode();
        if (currentMode !== lastMode) {
            location.reload();
        }
    });

});


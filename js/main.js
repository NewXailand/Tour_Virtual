window.onload = () => {
    const offcanvas = document.getElementById('offcanvas');
    const openButton = document.getElementById('openOffcanvas');
    const closeButton = document.getElementById('closeOffcanvas');
    const tourButton = document.getElementById('tourButton');
    const introVideo = document.getElementById('introVideo');

    // Abrir el offcanvas
    openButton.addEventListener('click', () => {
        offcanvas.classList.add('open');
    });

    // Cerrar el offcanvas
    closeButton.addEventListener('click', () => {
        offcanvas.classList.remove('open');
    });

    // Configurar y reproducir el video introductorio
    tourButton.addEventListener('click', () => {
        offcanvas.classList.remove('open');
        reproducirVideo();
    });

    function reproducirVideo() {
        introVideo.style.visibility = 'visible';
        introVideo.style.opacity = '1';
        introVideo.style.display = 'block';
        introVideo.play();

        if (introVideo.requestFullscreen) {
            introVideo.requestFullscreen();
        } else if (introVideo.webkitRequestFullscreen) {
            introVideo.webkitRequestFullscreen();
        } else if (introVideo.msRequestFullscreen) {
            introVideo.msRequestFullscreen();
        }

        introVideo.onended = () => {
            window.location.href = 'videos1.html';
        };
    }
};

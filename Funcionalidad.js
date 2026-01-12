// Splash animado del logo NovatiDev
window.addEventListener('DOMContentLoaded', function() {
	const splash = document.getElementById('splash-logo');
	const heroVideo = document.getElementById('hero-video');
	if (splash) {
		setTimeout(() => {
			splash.style.opacity = '0';
			setTimeout(() => {
				splash.style.display = 'none';
				// Reproducir el video después de la animación
				if (heroVideo) {
					heroVideo.muted = false;
					heroVideo.play().catch(() => {/* Autoplay puede ser bloqueado por el navegador */});
				}
			}, 700);
		}, 4000);
	}
});

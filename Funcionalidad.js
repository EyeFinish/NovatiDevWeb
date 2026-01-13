// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
	const animarScrollElements = document.querySelectorAll('.animar-scroll');
	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });
		animarScrollElements.forEach(el => observer.observe(el));
	} else {
		// Fallback para navegadores antiguos
		animarScrollElements.forEach(el => el.classList.add('visible'));
	}
});
// Menú hamburguesa para móvil
document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.querySelector('.menu-toggle');
	const mainNav = document.querySelector('.main-nav');
	if (menuToggle && mainNav) {
		menuToggle.addEventListener('click', function() {
			const isOpen = mainNav.classList.toggle('open');
			menuToggle.setAttribute('aria-expanded', isOpen);
		});
		// Cerrar menú al hacer click en un link
		mainNav.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => {
				mainNav.classList.remove('open');
				menuToggle.setAttribute('aria-expanded', false);
			});
		});
	}
});
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

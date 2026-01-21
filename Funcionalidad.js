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
		// Cerrar menú al hacer click en un link (excepto dropdown toggle)
		mainNav.querySelectorAll('a').forEach(link => {
			if (!link.classList.contains('dropdown-toggle')) {
				link.addEventListener('click', () => {
					mainNav.classList.remove('open');
					menuToggle.setAttribute('aria-expanded', false);
				});
			}
		});
	}
	
	// Manejo del menú desplegable de productos con click
	const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
	dropdownToggles.forEach(toggle => {
		toggle.addEventListener('click', function(e) {
			e.preventDefault(); // Evitar navegación
			const dropdown = this.parentElement;
			
			// Cerrar otros dropdowns abiertos
			document.querySelectorAll('.dropdown.active').forEach(otherDropdown => {
				if (otherDropdown !== dropdown) {
					otherDropdown.classList.remove('active');
				}
			});
			
			// Toggle del dropdown actual
			dropdown.classList.toggle('active');
		});
	});
	
	// Cerrar dropdown al hacer click fuera
	document.addEventListener('click', function(e) {
		if (!e.target.closest('.dropdown')) {
			document.querySelectorAll('.dropdown.active').forEach(dropdown => {
				dropdown.classList.remove('active');
			});
		}
	});
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
		}, 1800);
	}
});

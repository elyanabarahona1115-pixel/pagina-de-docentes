/* ========================================
   JAVASCRIPT - TALLER DE BELLEZA
   Interactividades y mejoras UX
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Intersection Observer para animaciones al scroll
    initializeScrollAnimations();
    
    // Suavizar scroll en enlaces internos
    smoothScrollLinks();
    
    // Efecto de parallax en hero section
    addParallaxEffect();
});

/**
 * Intersection Observer: Anima elementos cuando se hacen visibles
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar al todos los elementos que deben animarse
    document.querySelectorAll('.taller-section, .achievement-card, .challenge-card, .quality-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Scroll suave para enlaces internos
 */
function smoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verificar que sea un ancla válida en la página actual
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
                const headerHeight = document.querySelector('.navbar-wrapper')?.offsetHeight || 70;
                
                window.scrollTo({
                    top: offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Efecto parallax en la sección hero
 */
function addParallaxEffect() {
    const heroSection = document.querySelector('.hero-taller');
    
    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroOverlay = document.querySelector('.hero-overlay-belleza');
        
        if (heroOverlay) {
            // Parallax suave: mueve a 0.5x la velocidad del scroll
            heroOverlay.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

/**
 * Función auxiliar: cambiar ruta de imágenes
 * Útil para cuando el usuario reemplace los placeholders
 */
function updateImagePath(imageNumber, newPath) {
    const placeholder = document.querySelector(
        `img[src*="placeholder-${imageNumber}-"]`
    );
    
    if (placeholder) {
        placeholder.src = newPath;
        placeholder.style.opacity = '1';
    }
}

/**
 * Verificar si alguna imagen no cargó y mostrar mensaje en consola
 */
window.addEventListener('load', function() {
    const images = document.querySelectorAll('.placeholder-img');
    images.forEach((img, index) => {
        if (img.naturalHeight === 0) {
            console.warn(`Imagen ${index + 1} no cargada: ${img.src}`);
        }
    });
});

/**
 * Efecto de scroll en la barra de navegación
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-wrapper');
    
    if (navbar) {
        if (window.pageYOffset > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(105, 66, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(105, 66, 0, 0.15)';
        }
    }
});

// Exportar función para uso externo si es necesario
window.updateImagePath = updateImagePath;

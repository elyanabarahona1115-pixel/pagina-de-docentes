/**
 * SISTEMA DINÁMICO DE TALLERES
 * Maneja la carga, navegación y renderizado de contenido de talleres
 */

class TallerDinamico {
    constructor() {
        this.tallerActual = 'belleza';
        this.contenedor = document.getElementById('taller-content');
        this.selectorSection = document.querySelector('.talleres-selector');
        this.init();
    }

    init() {
        // Obtener taller del URL o localStorage
        const tallerDelUrl = this.obtenerTallerDelUrl();
        if (tallerDelUrl && TALLERES_DATA[tallerDelUrl]) {
            this.tallerActual = tallerDelUrl;
        } else {
            // Cargar del localStorage si existe
            const tallerGuardado = localStorage.getItem('tallerActual');
            if (tallerGuardado && TALLERES_DATA[tallerGuardado]) {
                this.tallerActual = tallerGuardado;
            }
        }

        // Renderizar el taller actual
        this.renderizarTaller(this.tallerActual);
        
        // Configurar listeners para los botones del dropdown
        this.configurarListeners();
        
        // Mantener sincronizado el dropdown con el taller actual
        this.actualizarDropdown();
    }

    obtenerTallerDelUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('taller');
    }

    configurarListeners() {
        // Listener para todos los botones de taller
        document.querySelectorAll('[data-taller]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tallerSeleccionado = btn.getAttribute('data-taller');
                this.cambiarTaller(tallerSeleccionado);
            });
        });
    }

    cambiarTaller(tallerNuevo) {
        if (!TALLERES_DATA[tallerNuevo]) {
            console.error(`Taller no encontrado: ${tallerNuevo}`);
            return;
        }

        if (this.tallerActual === tallerNuevo) return;

        this.tallerActual = tallerNuevo;
        
        // Guardar en localStorage
        localStorage.setItem('tallerActual', tallerNuevo);
        
        // Actualizar URL sin recargar
        const nuevoUrl = `?taller=${tallerNuevo}`;
        window.history.pushState({ taller: tallerNuevo }, '', nuevoUrl);
        
        // Renderizar el nuevo taller
        this.renderizarTaller(tallerNuevo);
        
        // Actualizar dropdown
        this.actualizarDropdown();
        
        // Scroll suave al contenedor
        this.contenedor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    renderizarTaller(tallerKey) {
        const taller = TALLERES_DATA[tallerKey];
        if (!taller) return;

        document.body.classList.remove('area-belleza', 'area-carpinteria', 'area-electricidad', 'area-banda', 'area-deportes');
        document.body.classList.add(`area-${tallerKey}`);

        if (this.selectorSection) {
            const params = new URLSearchParams(window.location.search);
            const mostrarSelector = !params.has('taller');
            this.selectorSection.hidden = !mostrarSelector;
            this.selectorSection.classList.toggle('hidden', !mostrarSelector);
        }

        // Limpiar contenedor
        this.contenedor.innerHTML = '';
        this.contenedor.classList.remove('theme-belleza', 'theme-carpinteria', 'theme-electricidad', 'theme-banda');
        this.contenedor.classList.remove('theme-deportes');
        if (tallerKey === 'carpinteria') {
            this.contenedor.classList.add('theme-carpinteria');
        } else if (tallerKey === 'electricidad') {
            this.contenedor.classList.add('theme-electricidad');
        } else if (tallerKey === 'banda') {
            this.contenedor.classList.add('theme-banda');
        } else if (tallerKey === 'deportes') {
            this.contenedor.classList.add('theme-deportes');
        } else {
            this.contenedor.classList.add('theme-belleza');
        }

        // Crear HTML del taller
        const html = `
            ${this.renderizarHero(taller)}
            ${this.renderizarSecciones(taller)}
            ${this.renderizarCTA(taller)}
        `;

        this.contenedor.innerHTML = html;

        // Re-aplicar listeners después de renderizar
        this.configurarListeners();
    }

    renderizarHero(taller) {
        let temaClase = 'hero-taller-belleza';
        let overlayClase = 'hero-overlay-belleza';
        let fondoDeportes = '';

        if (taller.id === 'deportes') {
            temaClase = 'hero-taller-deportes';
            overlayClase = 'hero-overlay-deportes';
            const imagenesDeportes = taller.secciones[0].imagenes || [];
            const rutasDeportes = imagenesDeportes.map(imagen =>
                imagen.startsWith('http') || imagen.startsWith('data:') || imagen.startsWith('/') || imagen.startsWith('fotos de maestros/') || imagen.startsWith('assets/')
                    ? imagen
                    : `fotos de maestros/assets/images/${imagen}`
            );
            const indicadores = rutasDeportes.map((_, index) => `
                <button type="button" data-bs-target="#deportesHeroCarousel" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}" aria-label="Imagen ${index + 1}"></button>
            `).join('');
            const slides = rutasDeportes.map((ruta, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${ruta}" class="hero-deportes-image hero-deportes-image-${index + 1}" alt="Área de Deportes, imagen ${index + 1}" />
                </div>
            `).join('');
            fondoDeportes = `
                <div id="deportesHeroCarousel" class="carousel slide hero-deportes-carousel" data-bs-ride="carousel">
                    <div class="carousel-indicators">${indicadores}</div>
                    <div class="carousel-inner">${slides}</div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#deportesHeroCarousel" data-bs-slide="prev" aria-label="Imagen anterior">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#deportesHeroCarousel" data-bs-slide="next" aria-label="Imagen siguiente">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            `;
        } else if (taller.id === 'carpinteria') {
            temaClase = 'hero-taller-carpinteria';
            overlayClase = 'hero-overlay-carpinteria';
        } else if (taller.id === 'electricidad') {
            temaClase = 'hero-taller-electricidad';
            overlayClase = 'hero-overlay-electricidad';
        } else if (taller.id === 'banda') {
            temaClase = 'hero-taller-banda';
            overlayClase = 'hero-overlay-banda';
        }

        return `
            <section class="hero-taller ${temaClase}">
                ${fondoDeportes}
                <div class="${overlayClase}"></div>
                <div class="container hero-content-belleza">
                    <h1 class="hero-title">${taller.titulo}</h1>
                    <p class="hero-subtitle">${taller.subtitulo}</p>
                    <p class="hero-description">${taller.descripcion}</p>
                </div>
            </section>
        `;
    }

    renderizarSecciones(taller) {
        let html = '';
        
        taller.secciones.forEach((seccion, index) => {
            const esLight = index % 2 === 0;
            const classSectionType = esLight ? 'section-light' : 'section-dark';
            
            html += `
                <section class="taller-section ${classSectionType}">
                    <div class="container">
            `;

            // Renderizar según el tipo de sección
            if (seccion.tipo === 'card-grid') {
                html += this.renderizarCardGrid(seccion);
            } else if (seccion.tipo === 'challenge-grid') {
                html += this.renderizarChallengeGrid(seccion);
            } else if (seccion.tipo === 'quality-grid') {
                html += this.renderizarQualityGrid(seccion);
            } else {
                html += this.renderizarSeccionNormal(seccion);
            }

            html += `
                    </div>
                </section>
            `;
        });

        return html;
    }

    renderizarSeccionNormal(seccion) {
        const imagenes = seccion.imagenes || (seccion.imagen ? [seccion.imagen] : []);
        const rutasImagenes = imagenes.map(imagen =>
            imagen.startsWith('http') || imagen.startsWith('data:') || imagen.startsWith('/') || imagen.startsWith('fotos de maestros/') || imagen.startsWith('assets/')
                ? imagen
                : `fotos de maestros/assets/images/${imagen}`
        );

        const imagenHtml = rutasImagenes.length ? `
            <div class="col-lg-6 ${seccion.layout === 'image-text' ? 'order-lg-1' : 'order-lg-2'}">
                ${rutasImagenes.map(rutaImagen => `
                    <div class="image-placeholder mb-3 ${seccion.imagenClase || ''}">
                        <img src="${rutaImagen}" alt="${seccion.titulo}" class="placeholder-img" />
                        <div class="placeholder-text">
                            <i class="fas fa-images"></i>
                            <p>${seccion.titulo}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : '';

        const classOrder = seccion.layout === 'image-text' ? 'order-lg-2' : 'order-lg-1';
        
        return `
            <div class="row align-items-center gy-4">
                ${imagenHtml ? `
                    <div class="col-lg-6 ${classOrder}">
                        <h2 class="section-title">${seccion.titulo}</h2>
                        <div class="section-divider"></div>
                        ${seccion.contenido.split('\n\n').map(p => `<p class="section-text">${p}</p>`).join('')}
                    </div>
                    ${imagenHtml}
                ` : `
                    <div class="col-12">
                        <h2 class="section-title text-center">${seccion.titulo}</h2>
                        <div class="section-divider mx-auto"></div>
                        ${seccion.contenido.split('\n\n').map(p => `<p class="section-text">${p}</p>`).join('')}
                    </div>
                `}
            </div>
        `;
    }

    renderizarCardGrid(seccion) {
        return `
            <div>
                <h2 class="section-title text-center mb-5">${seccion.titulo}</h2>
                <div class="section-divider mx-auto"></div>
                <div class="row gy-4 mt-3">
                    ${seccion.items.map(item => `
                        <div class="col-lg-6">
                            <div class="achievement-card">
                                <div class="achievement-icon">
                                    <i class="${item.icon}"></i>
                                </div>
                                <h3>${item.titulo}</h3>
                                <p>${item.texto}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderizarChallengeGrid(seccion) {
        return `
            <div>
                <h2 class="section-title text-center mb-5">${seccion.titulo}</h2>
                <div class="section-divider mx-auto"></div>
                <div class="row gy-4 mt-3">
                    ${seccion.items.map(item => `
                        <div class="col-md-6">
                            <div class="challenge-card">
                                <div class="challenge-number">${item.numero}</div>
                                <h3>${item.titulo}</h3>
                                <p>${item.texto}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderizarQualityGrid(seccion) {
        return `
            <div>
                <h2 class="section-title text-center mb-5">${seccion.titulo}</h2>
                <div class="section-divider mx-auto"></div>
                <div class="row gy-4 mt-4">
                    ${seccion.items.map(item => `
                        <div class="col-md-6">
                            <div class="quality-card">
                                <div class="quality-icon">
                                    <i class="${item.icon}"></i>
                                </div>
                                <h3>${item.titulo}</h3>
                                <p>${item.texto}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderizarCTA(taller) {
        let tallerNombre = 'Carpintería y Ebanistería';

        if (taller.id === 'belleza') {
            tallerNombre = 'Belleza y Cosmetología';
        } else if (taller.id === 'banda') {
            tallerNombre = 'Banda Latina Francisco Miranda';
        } else if (taller.id === 'electricidad') {
            tallerNombre = 'Electricidad';
        }

        return `
            <section class="cta-section">
                <div class="container text-center">
                    <h2>Únete a la ${tallerNombre}</h2>
                    <p>Desarrolla habilidades prácticas que transformarán tu futuro</p>
                    <a href="index.html#contacto" class="btn btn-cta">Solicitar Información</a>
                </div>
            </section>
        `;
    }

    actualizarDropdown() {
        // Actualizar el estado activo del dropdown
        document.querySelectorAll('[data-taller]').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-taller') === this.tallerActual) {
                btn.classList.add('active');
            }
        });
    }

    // Método auxiliar: cambiar ruta de imagen dinámicamente
    actualizarImagen(numeroImagen, nuevaRuta) {
        const imgs = document.querySelectorAll('.placeholder-img');
        if (imgs[numeroImagen - 1]) {
            imgs[numeroImagen - 1].src = nuevaRuta;
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que talleres-data.js esté cargado
    if (typeof TALLERES_DATA !== 'undefined') {
        window.tallerDinamico = new TallerDinamico();
    } else {
        console.error('TALLERES_DATA no está definido. Asegúrate de que talleres-data.js esté cargado primero.');
    }
});

// Manejar el botón de atrás del navegador
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.taller) {
        window.tallerDinamico.tallerActual = event.state.taller;
        window.tallerDinamico.renderizarTaller(event.state.taller);
        window.tallerDinamico.actualizarDropdown();
    }
});

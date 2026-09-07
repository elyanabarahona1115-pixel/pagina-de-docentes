# Guía de Integración - Taller de Belleza y Cosmetología

## 📋 Descripción General

Se ha creado una página completa y elegante para el Taller de Belleza y Cosmetología con una paleta de colores morados pastel, diseño responsivo y 6 espacios estratégicos para imágenes.

## 📁 Archivos Creados

1. **`taller-belleza.html`** - Página principal con toda la estructura HTML
2. **`taller-belleza.css`** - Estilos completos con colores morados pastel
3. **`taller-belleza.js`** - Interactividades, animaciones suaves y efectos de scroll

## 🎨 Paleta de Colores Utilizada

```css
--lilac: #E9D8A6              /* Lila suave */
--soft-lavender: #EAE6FA     /* Lavanda suave */
--pastel-violet: #D8B4FE     /* Violeta pastel */
--light-purple: #F3E8FF      /* Púrpura claro */
--darker-purple: #C084FC     /* Púrpura más oscuro (acentos) */
--white-cream: #FFFBF7       /* Blanco cremoso */
--accent-rose: #E9C9D8       /* Acento rosado */
```

## 🖼️ Espacios para Imágenes (6 PLACEHOLDERS)

Los 6 placeholders están distribuidos estratégicamente a lo largo de las 9 secciones:

### 1. **IMAGEN 1: Foto del origen / primera plancha**
   - Ubicación: Sección 1 (Origen del Taller)
   - Ruta actual: `fotos de maestros/assets/images/placeholder-1-origen.jpg`
   - Descripción sugerida: Primera plancha rosada y equipos iniciales

### 2. **IMAGEN 2: Primeros equipos y herramientas**
   - Ubicación: Sección 2 (Los Primeros Años)
   - Ruta actual: `fotos de maestros/assets/images/placeholder-2-primeros-equipos.jpg`
   - Descripción sugerida: Peines, ganchos, herramientas iniciales

### 3. **IMAGEN 3: Taller actual con equipos**
   - Ubicación: Sección 3 (Crecimiento y Desarrollo)
   - Ruta actual: `fotos de maestros/assets/images/placeholder-3-taller-actual.jpg`
   - Descripción sugerida: Vista actual del taller con todos los equipos

### 4. **IMAGEN 4: Estudiantes en actividades prácticas**
   - Ubicación: Sección 4 (Ampliación de Áreas)
   - Ruta actual: `fotos de maestros/assets/images/placeholder-4-estudiantes-practicas.jpg`
   - Descripción sugerida: Estudiantes realizando prácticas de belleza

### 5. **IMAGEN 5: Actividades y servicios del taller**
   - Ubicación: Sección 7 (Actividades y Proyección)
   - Ruta actual: `fotos de maestros/assets/images/placeholder-5-actividades.jpg`
   - Descripción sugerida: Servicios, eventos o demostraciones

### 6. **IMAGEN 6: Visión futura del taller**
   - Ubicación: Sección 8 (Visión y Futuro)
   - Ruta actual: `fotos de maestros/assets/images/placeholder-6-futuro.jpg`
   - Descripción sugerida: Proyecto de aula propia o futuro del taller

## 🔄 Cómo Reemplazar las Imágenes

### Opción 1: Editar directamente en HTML
1. Abre `taller-belleza.html`
2. Busca `<!-- IMAGEN X: ...` para cada imagen
3. Reemplaza el `src` de la etiqueta `<img>` con la ruta correcta

Ejemplo:
```html
<!-- IMAGEN 1: Foto del origen / primera plancha -->
<div class="image-placeholder">
    <img src="tu-ruta/foto-1.jpg" alt="Primera plancha rosada y equipos iniciales del taller" class="placeholder-img" />
    <!-- ... -->
</div>
```

### Opción 2: Usar JavaScript (dinámico)
Desde la consola del navegador o desde otro archivo JS:
```javascript
updateImagePath(1, 'ruta/a/tu/imagen-1.jpg');
updateImagePath(2, 'ruta/a/tu/imagen-2.jpg');
updateImagePath(3, 'ruta/a/tu/imagen-3.jpg');
// ... etc
```

## 🔗 Navegación Actualizada

El enlace "Taller de Belleza" se ha añadido en dos lugares del `index.html`:

1. **Barra de Navegación Principal** - Menú principal
2. **Specialty Bar** - Enlace directo como "Belleza y Cosmetología"

## ✨ Características de Diseño

### Colores y Estética
- ✅ Paleta morada pastel (lilac, lavanda, violeta pastel)
- ✅ Tonos neutros suaves (crema, grises cálidos)
- ✅ Detalles rosados y dorados sutiles
- ✅ Atmósfera profesional y elegante

### Tipografía
- ✅ Encabezados: Playfair Display (Serif elegante)
- ✅ Cuerpo: Poppins (Sans-Serif moderna)

### Interactividades
- ✅ Transiciones suaves en hover
- ✅ Animaciones al scroll (Intersection Observer)
- ✅ Efecto parallax en la sección hero
- ✅ Scroll suave en enlaces internos

### Diseño Responsivo
- ✅ 100% responsive (móvil, tablet, desktop)
- ✅ Media queries optimizadas
- ✅ Accesibilidad mejorada (focus-visible)

## 📄 Estructura de Contenido (9 Secciones)

```
1. Origen del Taller
2. Los Primeros Años del Taller
3. Crecimiento y Desarrollo del Taller
4. Ampliación de las Áreas de Formación
5. Principales Logros del Taller
6. Dificultades que ha Enfrentado el Taller
7. Actividades y Proyección del Taller
8. Visión y Futuro del Taller
9. Cualidades que debe Desarrollar el Estudiante
```

## 🎯 Secciones Alternas

Las secciones alternadamente tienen:
- **Secciones Light**: Fondo blanco cremoso con gradiente suave
- **Secciones Dark**: Fondo en tonos morados pastel

## 💡 Notas Técnicas

- El archivo HTML es **semántico** y bien estructurado
- Incluye **comentarios claros** para localizar fácilmente cada sección
- Los **placeholders de imagen** tienen estilos elegantes (bordes redondeados, sombras suaves)
- La página es **completamente funcional** sin necesidad de placeholders de imagen
- Bootstrap 5 está incluido para componentes y grid

## 🚀 Próximos Pasos

1. Reemplazar los 6 placeholders de imagen con fotos reales
2. Verificar que las rutas de imagen sean correctas
3. Opcionalmente, ajustar colores o texto según preferencias
4. Probar responsividad en diferentes dispositivos

## 📞 Soporte

Si necesitas:
- Cambiar colores: Edita las variables CSS en `:root`
- Modificar texto: Edita directamente en HTML
- Agregar más secciones: Copia la estructura de `taller-section`
- Cambiar tipografía: Actualiza `@import` de fonts en HTML

¡La página está lista para usar! Solo reemplaza las imágenes y estará completa. ✨

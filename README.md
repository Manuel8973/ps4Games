# 🎮 PS4 Games Catalog - Landing Page

Una landing page moderna y responsive para mostrar un catálogo de juegos de PlayStation 4, optimizada para dispositivos móviles con animaciones y transiciones suaves.

## ✨ Características

### 🎨 Diseño Visual
- **Mobile-First**: Optimizado principalmente para dispositivos móviles
- **Responsive**: Se adapta perfectamente a tablets y desktop
- **Animaciones**: Efectos de entrada, hover y scroll suaves
- **Partículas animadas** en el fondo del hero
- **Gradientes dinámicos** y efectos de cristal
- **Cursor personalizado** que responde a elementos interactivos

### 📱 Funcionalidades
- **Sistema de filtros** por género (Acción, Aventura, RPG, Deportes)
- **Toggle de vista**: Cambiar entre vista grid y lista
- **Grid optimizado**: 2 juegos por fila en móviles, responsive en otras pantallas
- **Navegación hamburger** para dispositivos pequeños
- **Smooth scrolling** entre secciones
- **Contador animado** en estadísticas

### 🎮 Contenido
- **12 juegos PS4** populares incluidos
- **Portadas reales** de PlayStation Store
- **Sistema de calificaciones** con estrellas
- **Información detallada** de cada juego
- **Precios** y descripciones

## 🚀 Instalación y Uso

1. **Descarga** todos los archivos del proyecto
2. **Abre** `index.html` en tu navegador
3. **¡Listo!** No requiere servidor web ni instalación adicional

## 📁 Estructura del Proyecto

```
📦 PS4-Games-Catalog/
├── 📄 index.html          # Estructura HTML principal
├── 🎨 styles.css          # Todos los estilos y animaciones
├── ⚡ script.js           # Funcionalidades JavaScript
├── 🔧 api-config.js       # Configuración para APIs de juegos
└── 📖 README.md           # Este archivo
```

## 🎯 Personalización

### Agregar Más Juegos
Edita el array `games` en `script.js`:

```javascript
{
    id: 13,
    title: "Nuevo Juego",
    genre: "action", // action, adventure, rpg, sports
    description: "Descripción del juego...",
    rating: 5, // 1-5 estrellas
    price: "$49.99",
    gameId: "nuevo-juego" // Para la portada
}
```

### Cambiar Colores
Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #0070f3;
    --secondary-color: #00d4ff;
    --accent-color: #7c3aed;
}
```

### Portadas de Juegos
Las portadas están configuradas en `script.js` usando URLs de PlayStation Store. Para agregar nuevas:

```javascript
const gameCoverMap = {
    'nuevo-juego': 'https://url-de-la-portada.jpg'
};
```

## 🔗 APIs de Juegos Disponibles

### RAWG API (Recomendada) 🆓
- **URL**: https://rawg.io/apidocs
- **Características**: Base de datos completa, gratis hasta 20,000 requests/mes
- **Datos**: Portadas, screenshots, metadata, ratings

### The Game Database 🆓
- **URL**: https://thegamesdb.net/
- **Características**: API gratuita, enfocada en portadas y metadata
- **Datos**: Portadas de alta calidad, información detallada

### IGDB API 💰
- **URL**: https://api.igdb.com/
- **Características**: API muy completa (propiedad de Twitch)
- **Datos**: Metadata completa, portadas, videos, reviews

### Implementar API (Ejemplo con RAWG):

1. **Regístrate** en https://rawg.io/apidocs
2. **Obtén tu API key**
3. **Reemplaza** en `script.js`:

```javascript
const API_KEY = 'tu-api-key-aqui';

async function getGameCover(game) {
    try {
        const response = await fetch(
            `https://api.rawg.io/api/games?key=${API_KEY}&search=${game.title}&page_size=1`
        );
        const data = await response.json();
        if (data.results?.[0]?.background_image) {
            return data.results[0].background_image;
        }
    } catch (error) {
        console.log('API error:', error);
    }
    return null; // Fallback a gradient
}
```

## 📱 Compatibilidad Móvil

### Optimizaciones Incluidas:
- **Grid responsive**: 2 cards por fila en móviles
- **Navegación hamburger** para pantallas pequeñas
- **Botones táctiles** optimizados
- **Fuentes escalables** con `clamp()`
- **Vista lista** para mejor navegación en móvil
- **Gestos touch** nativos

### Breakpoints:
- **Móvil**: < 768px (2 cards por fila)
- **Móvil pequeño**: < 480px (1 card por fila)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Tecnologías Utilizadas

- **HTML5** semántico
- **CSS3** con Grid y Flexbox
- **JavaScript ES6+** vanilla
- **Font Awesome** para iconos
- **Google Fonts** (Orbitron + Roboto)

## 🎨 Paleta de Colores

- **Primario**: `#0070f3` (Azul PlayStation)
- **Secundario**: `#00d4ff` (Cyan brillante)
- **Acento**: `#7c3aed` (Morado vibrante)
- **Fondo**: `#0a0a0a` (Negro profundo)
- **Texto**: `#ffffff` / `#b0b0b0`

## 🔄 Próximas Mejoras

- [ ] **Carrito de compras** funcional
- [ ] **Modo oscuro/claro** toggle
- [ ] **Búsqueda en tiempo real**
- [ ] **Filtros avanzados** (precio, rating, año)
- [ ] **Lazy loading** para mejor performance
- [ ] **PWA** (Progressive Web App)
- [ ] **Integración con APIs** de PlayStation Store

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¿Necesitas ayuda?** Abre un issue o contribuye al proyecto. ¡Las contribuciones son bienvenidas! 🚀
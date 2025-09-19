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

### Opción 1: Uso Básico (GitHub Pages)
1. **Descarga** todos los archivos del proyecto
2. **Abre** `index.html` en tu navegador
3. **¡Listo!** Usa imágenes estáticas sin necesidad de API key

### Opción 2: Con API de RAWG (Opcional)
1. **Copia** `config.example.js` a `config.js`
2. **Regístrate** en https://rawg.io/apidocs para obtener una API key gratuita
3. **Edita** `config.js` y agrega tu API key:
```javascript
const CONFIG = {
    RAWG_API_KEY: 'tu-api-key-aqui',
    USE_API: true,
    USE_PLACEHOLDER_IMAGES: false
};
```
4. **Abre** `index.html` en tu navegador

### Configuración Segura para GitHub Pages
El proyecto incluye un sistema de configuración seguro que:
- ✅ **No expone** API keys en el repositorio público
- ✅ **Funciona sin API** usando imágenes estáticas
- ✅ **Permite API opcional** para desarrollo local
- ✅ **Compatible con GitHub Pages** out-of-the-box

## 📁 Estructura del Proyecto

```
📦 PS4-Games-Catalog/
├── 📄 index.html          # Estructura HTML principal
├── 🎨 styles.css          # Todos los estilos y animaciones
├── ⚡ script.js           # Funcionalidades JavaScript
├── 🔧 api-config.js       # Configuración para APIs de juegos
├── ⚙️ config.js           # Configuración de API (segura)
├── 📋 config.example.js   # Ejemplo de configuración
└── 📖 README.md           # Este archivo
```

### Archivos de Configuración
- **`config.js`**: Configuración activa (incluida en .gitignore para seguridad)
- **`config.example.js`**: Plantilla de configuración para desarrollo local
- **`api-config.js`**: Mapeo de portadas estáticas como fallback

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

## 🔗 Configuración de API (Opcional)

### Configuración Segura
El proyecto utiliza un sistema de configuración que protege las API keys:

```javascript
// config.js (no incluido en el repositorio)
const CONFIG = {
    RAWG_API_KEY: 'tu-api-key-privada',
    USE_API: true,
    USE_PLACEHOLDER_IMAGES: false
};
```

### APIs Disponibles

#### RAWG API (Recomendada) 🆓
- **URL**: https://rawg.io/apidocs
- **Gratis**: Hasta 20,000 requests/mes
- **Datos**: Portadas HD, metadata, ratings

#### Configuración Manual (Solo desarrollo local):
1. **Copia** `config.example.js` → `config.js`
2. **Regístrate** en RAWG y obtén tu API key
3. **Edita** `config.js` con tu API key
4. **Nunca subas** `config.js` al repositorio

### Fallback Sin API
Si no configuras una API, el proyecto automáticamente usa:
- ✅ **Portadas estáticas** de alta calidad
- ✅ **Placeholders con gradientes** para juegos nuevos
- ✅ **Funcionamiento completo** sin configuración adicional

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
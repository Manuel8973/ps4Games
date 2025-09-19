# 🚀 Guía de Deployment en GitHub Pages

## Pasos para subir tu proyecto a GitHub Pages

### 1. 📂 Preparar el Repositorio
```bash
# En tu carpeta del proyecto
git init
git add .
git commit -m "Initial commit: PS4 Games Catalog"
```

### 2. 🌐 Crear Repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) y crea un nuevo repositorio
2. **Nombre sugerido**: `ps4-games-catalog` 
3. **Público** (necesario para GitHub Pages gratuito)
4. **NO** marques "Add a README file" (ya tienes uno)

### 3. 📤 Subir el Código
```bash
# Conectar con tu repositorio (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/ps4-games-catalog.git
git branch -M main
git push -u origin main
```

### 4. ⚙️ Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (configuraciones)
3. Scroll hasta **Pages** en el menú lateral
4. En **Source** selecciona **Deploy from a branch**
5. Selecciona **main** branch y **/ (root)**
6. Click **Save**

### 5. 🎉 ¡Listo!
- Tu sitio estará disponible en: `https://tu-usuario.github.io/ps4-games-catalog/`
- GitHub tarda 5-10 minutos en hacer el deploy inicial
- Los cambios futuros se actualizan automáticamente

## 🔒 Seguridad Verificada

✅ **API Key protegida**: No se incluye `config.js` en el repositorio  
✅ **Funciona sin API**: Usa imágenes estáticas por defecto  
✅ **GitHub Pages compatible**: Todo listo para deploy  
✅ **Responsive**: Perfecto en móviles y desktop  

## 🛠️ Actualizaciones Futuras

Para actualizar tu sitio:
```bash
# Hacer cambios en tu código local
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

El sitio se actualizará automáticamente en 1-2 minutos.

## 📱 URL Final
Tu catálogo estará disponible en:
**https://tu-usuario.github.io/ps4-games-catalog/**

¡Comparte el link con tus amigos y muestra tu colección de juegos!
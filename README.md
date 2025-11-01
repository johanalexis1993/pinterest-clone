                                                    "ARQUITECTURA"

<details>
  <summary>Ver árbol completo</summary>

```text
pinterest-clone/
  ├─ public/
  │ ├─ .env
  │ ├─ index.html
  │ ├─ main.js
  │ └─ style.css
  ├─ src/
  │ ├─ api/
  │ └─ unsplash.js
  │ ├─ componets/
  │ ├─ gallery.js
  │ └─ serachBar.css
  │ └─ lib/
  │ └─ dom.css
  ├─ package-lock.json
  ├─ package.json
  ├─ README
  └─ vite.config.js

```

                                          "Pinterest Replica (Vite + Unsplash)"

Réplica sencilla de Pinterest: buscador de imágenes que consume la API de Unsplash. Código dividido en componentes ES Modules y estilos responsive en CSS.

Características: Búsqueda de imágenes por palabra clave (Unsplash /search/photos)
“Inicio” con feed de últimas fotos (Unsplash /photos).
Reset del input tras cada búsqueda.
Click en el logo para volver al estado inicial.
Tarjetas con foto, avatar del autor, nombre, username y enlace real al perfil.
Layout tipo “masonry” responsive con CSS Columns.
Accesible: estructura semántica, role="search", aria-live, label oculto, etc.
Código dividido en módulos: API, componentes de UI y utilidades.
Vite como bundler (scripts dev, build, preview).
Tech Stack
Vite 7.x (dev/build/preview).
Vanilla JS (ESM) para componentes.
CSS con variables y breakpoints.
Unsplash API (Accept-Version v1).
Requisitos previos
Node.js 20+
Una Access Key de Unsplash (developer dashboard).
Instalación y ejecución

# 1) Instalar dependencias: npm i

# 2) Variables de entorno: crear un archivo .env con la ACCESS_KEY

Crea .env en la raíz (con Vite quedará accesible como import.meta.env):
ej: VITE_UNSPLASH_ACCESS_KEY=TU_CLAVE_AQUI

# 3) Modo desarrollo: npm run dev

# 4) Build de producción: npm run build

# 5) Previsualización del build: npm run preview

Scripts definidos en package.json.

El proyecto ya usa import.meta.env.VITE_UNSPLASH_ACCESS_KEY y añade la cabecera Accept-Version: v1 en cada petición.
Configuración de Vite
Para este proyecto basta una única entrada (index):
// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
root: 'public',
build: { outDir: '../dist', emptyOutDir: true, rollupOptions: { input: { index: 'public/index.html' } } },
server: { port: 5173, open: true }
})

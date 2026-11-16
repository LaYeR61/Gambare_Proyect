# Gambare

Aplicación web de gestión de inventario. La interfaz está construida con React y Vite; Express sirve la versión compilada en producción y conserva disponibles las páginas heredadas en `/pages`.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Desarrollo

Instala las dependencias del servidor y del frontend una vez:

```bash
npm install
npm --prefix FRONTEND/Gambare install
```

Inicia Vite desde la raíz:

```bash
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`). Para iniciar también Express en otra terminal, ejecuta `npm start`; el servidor escucha en `http://localhost:3000`.

## Producción

Compila React y luego inicia Express:

```bash
npm run build
npm start
```

Abre `http://localhost:3000`. Express usa `PORT` si está definido y, por defecto, escucha en el puerto 3000. Las páginas HTML previas siguen disponibles en `/pages/home.html`, `/pages/inventario.html` y `/pages/compras.html`.

## Estructura

- `FRONTEND/Gambare/src`: aplicación y componentes React.
- `FRONTEND/Gambare/public`: recursos estáticos del frontend.
- `app`: servidor Express.
- `pages` y `styles`: páginas anteriores, mantenidas para la migración.

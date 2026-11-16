# Gambare – Frontend

Interfaz web del sistema de gestión de inventario y ventas **Gambare**, desarrollada con **React** y **Vite**. Esta primera versión construye la estructura principal de la aplicación: encabezado, menú lateral de navegación y área de contenido que cambia según la sección elegida.

## Tecnologías

- React (componentes de función y hook `useState`)
- Vite (servidor de desarrollo y empaquetado)
- CSS organizado por archivos (`colors.css`, `layout.css`, `estilos_comunes.css`, `estilo_general.css`)

## Cómo ejecutar el proyecto

Desde la carpeta `FRONTEND/Gambare`:

```bash
npm install        # instala las dependencias (solo la primera vez)
npm run dev        # inicia el modo desarrollo en http://127.0.0.1:5173
npm run build      # genera la versión final en la carpeta dist
npm run preview    # prueba la versión final en http://127.0.0.1:4173
```

## Estructura del proyecto

```
src/
├── App.jsx                  # Componente principal
├── main.jsx                 # Punto de entrada de React
├── components/
│   ├── Encabezado.jsx
│   ├── BarraBusqueda.jsx
│   ├── Notificaciones.jsx
│   ├── InfoUsuario.jsx
│   ├── AvatarUsuario.jsx
│   ├── BarraLateral.jsx
│   ├── ItemNavegacion.jsx
│   └── AreaContenido.jsx
└── styles/
    ├── colors.css
    ├── estilos_comunes.css
    ├── estilo_general.css
    └── layout.css
```

## Cómo funciona la aplicación

`App` guarda en un estado cuál es la **sección activa** (por defecto, *Home*). Ese valor se envía al menú lateral, que muestra la opción resaltada y permite cambiarla, y al área de contenido, que muestra el título de la sección seleccionada. Cuando el usuario hace clic en una opción del menú, el estado se actualiza y la pantalla cambia sin recargar la página.

```
App
├── Encabezado
│   ├── BarraBusqueda
│   ├── Notificaciones
│   ├── InfoUsuario
│   └── AvatarUsuario
├── BarraLateral
│   └── ItemNavegacion (uno por cada opción)
└── AreaContenido
```

## Descripción de los componentes

### App
Es el componente principal. Define el estado `seccionActiva` con `useState` y organiza la pantalla: el encabezado arriba y, debajo, el menú lateral junto con el área de contenido. Le pasa a `BarraLateral` el valor actual y la función para cambiarlo, y a `AreaContenido` el valor para que muestre la sección correcta. También define el nombre y el rol del usuario que se muestran en el encabezado.

### Encabezado
Es la barra superior de la aplicación. Muestra el logo de **Gambare** y agrupa la barra de búsqueda y la zona del usuario (notificaciones, información y avatar). Recibe las propiedades `nombre` y `rol`, que reparte a los componentes de usuario. La inicial del avatar se toma de la primera letra del nombre.

### BarraBusqueda
Muestra el campo de texto para buscar dentro del sistema. Recibe la propiedad `placeholder` para definir el texto guía (por ejemplo, "Buscar..."). Por ahora es solo la parte visual; la búsqueda real se conectará más adelante.

### Notificaciones
Muestra el icono de campana en el encabezado. Está pensado para avisar al usuario de eventos del sistema, como alertas de inventario. Por ahora es un elemento visual sin lógica.

### InfoUsuario
Muestra el nombre del usuario y su rol (por ejemplo, "Usuario basico – Almacenista"). Recibe ambos datos mediante las propiedades `nombre` y `rol`.

### AvatarUsuario
Dibuja un círculo con la inicial del usuario, a modo de foto de perfil. Recibe la propiedad `inicial`, que `Encabezado` calcula a partir del nombre.

### BarraLateral
Es el menú de navegación del lado izquierdo. Está dividido en dos bloques: las secciones principales (Home, Inventario, Compras / Proveedores, Producción, Ventas / Pedidos, Clientes y Contáctenos) y las opciones de la parte inferior (Perfil / Configuración y Cerrar sesión). Recorre cada lista con `.map()` y crea un `ItemNavegacion` por opción. Recibe `seccionActiva` y `setSeccionActiva`: con la primera sabe cuál opción resaltar y con la segunda cambia la sección cuando se hace clic.

### ItemNavegacion
Representa una sola opción del menú. Recibe el texto a mostrar (`texto`), si está seleccionada (`seccionActiva`) y la acción que se ejecuta al hacer clic (`onClick`). Cuando está seleccionada, agrega la clase `active` para resaltarla en color morado.

### AreaContenido
Es el espacio principal donde se muestra el contenido de la sección elegida. Recibe `seccionActiva` y presenta su nombre como título. Actualmente muestra un texto de marcador; en las siguientes versiones cada sección tendrá su propia pantalla (tablas de inventario, formularios de ventas, etc.).

## Estado actual y próximos pasos

- La navegación entre secciones funciona y resalta la opción activa.
- El contenido de cada sección es provisional.
- La búsqueda y las notificaciones son elementos visuales por ahora.
- Falta conectar el frontend con el backend (carpeta `app` del repositorio) para consultar y guardar datos reales.

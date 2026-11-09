import ItemNavegacion from "./ItemNavegacion";

function MenuLateral({ seccionActiva, cambiarSeccion }) {
  // Opciones de arriba
  const opcionesPrincipales = [
    "Home",
    "Inventario",
    "Compras / Proveedores",
    "Producción",
    "Ventas / Pedidos",
    "Clientes",
    "Contáctenos",
  ];

  // Opciones de abajo
  const opcionesInferiores = ["Perfil / Configuración", "Cerrar sesión"];

  return (
    <div className="barra_izquierda">
      <ul className="menu_principal">
        {opcionesPrincipales.map((opcion) => (
          <ItemNavegacion
            key={opcion}
            texto={opcion}
            activo={seccionActiva === opcion}
            onClick={() => cambiarSeccion(opcion)}
          />
        ))}
      </ul>

      <ul className="menu_inferior">
        {opcionesInferiores.map((opcion) => (
          <ItemNavegacion
            key={opcion}
            texto={opcion}
            activo={seccionActiva === opcion}
            onClick={() => cambiarSeccion(opcion)}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenuLateral;

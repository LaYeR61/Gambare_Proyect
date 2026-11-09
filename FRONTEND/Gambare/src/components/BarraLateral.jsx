import ItemNavegacion from "./ItemNavegacion";

const itemsMenu = [
  "Home",
  "Inventario",
  "Compras / Proveedores",
  "Producción",
  "Ventas / Pedidos",
  "Clientes",
  "Contáctenos",
];

const itemsFooter = [
  "Perfil / Configuración", 
  "Cerrar sesión"
];

function BarraLateral({ seccionActiva, setSeccionActiva }) {

  return (
    <div className="bar_izquierda">
      <ul className="izq_lista">
        {itemsMenu.map((opcion) => (
          <ItemNavegacion
            key={opcion}
            texto={opcion}
            seccionActiva={seccionActiva === opcion}
            onClick={() => setSeccionActiva(opcion)}
          />
        ))}
      </ul>
      <ul className="izq_footer">
        {itemsFooter.map((opcion) => (
          <ItemNavegacion
            key={opcion}
            texto={opcion}
            seccionActiva={seccionActiva === opcion}
            onClick={() => setSeccionActiva(opcion)}
          />
        ))}
      </ul>
    </div>
  );
}

export default BarraLateral;
import BarraBusqueda from "./BarraBusqueda";
import Notificaciones from "./Notificaciones";
import InfoUsuario from "./InfoUsuario";
import AvatarUsuario from "./AvatarUsuario";

function Encabezado({ nombre, rol }) {
  return (
    <div className="barra_superior">
      <div className="logo">GAMBARE</div>
      <BarraBusqueda placeholder="Buscar..." />
      <div className="bar_dir_derecha">
        <Notificaciones />
        <InfoUsuario nombre={nombre} rol={rol} />
        <AvatarUsuario inicial={nombre.charAt(0)} />
      </div>
    </div>
  );
}

export default Encabezado;
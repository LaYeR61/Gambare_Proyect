function InfoUsuario({ nombre, rol }) {
  return (
    <div className="info_usuario">
      <div className="nombre_usuario">{nombre}</div>
      <div className="rol_usuario_info">{rol}</div>
    </div>
  );
}

export default InfoUsuario;
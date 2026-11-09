function AreaContenido({ seccionActiva }) {
  return (
    <div className="area_contenido">
      <h2>{seccionActiva}</h2>
      <p>Aquí va el contenido de {seccionActiva}.</p>
    </div>
  );
}

export default AreaContenido;

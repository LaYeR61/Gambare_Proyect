import { useState } from "react";
import Encabezado from "./Encabezado";
import MenuLateral from "./MenuLateral";
import AreaContenido from "./AreaContenido";

function App() {
  // Guarda qué sección está seleccionada (empieza en Home)
  const [seccionActiva, setSeccionActiva] = useState("Home");

  return (
    <div className="contenedor_app">
      <Encabezado nombre="Usuario basico" rol="Almacenista" />

      <div className="cuerpo">
        <MenuLateral
          seccionActiva={seccionActiva}
          cambiarSeccion={setSeccionActiva}
        />
        <AreaContenido seccionActiva={seccionActiva} />
      </div>
    </div>
  );
}

export default App;

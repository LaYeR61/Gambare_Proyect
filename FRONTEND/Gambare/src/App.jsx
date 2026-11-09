import { useState } from "react";
import Encabezado from "./components/Encabezado";
import BarraLateral from "./components/BarraLateral";
import AreaContenido from "./components/AreaContenido";

function App() {

  const [seccionActiva, setSeccionActiva] = useState("Home");

  return (
    <>
      <Encabezado nombre="Usuario basico" rol="Almacenista" />
      <div className="layout">
        <BarraLateral 
          seccionActiva={seccionActiva} 
          setSeccionActiva={setSeccionActiva}
        />
        <AreaContenido seccionActiva={seccionActiva} />
      </div>
    </>
  );
}

export default App;
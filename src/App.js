import React from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Tabla from "./Components/Tabla/Tabla";

function App() {
  const tarjetasData = [
    { titulo: "Tarjeta 1", valor: "Valor 50%", descripcion: "Descripción de la tarjeta 1" },
    { titulo: "Tarjeta 2", valor: "Valor 75%", descripcion: "Descripción de la tarjeta 2" },
    { titulo: "Tarjeta 3", valor: "Valor 90%", descripcion: "Descripción de la tarjeta 3" },
    { titulo: "Tarjeta 4", valor: "Valor 100%", descripcion: "Descripción de la tarjeta 4" },
  ];

  const datosTabla = [
    { id: "01", concepto: "Proyecto React", estado: "Completado" },
    { id: "02", concepto: "Diseño UX/UI", estado: "En Proceso" },
    { id: "03", concepto: "Integración MVC", estado: "Pendiente" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola, Mi nombre es: Julieta Jeronimo</h1>

        <h2>Sección de Tarjetas</h2>
        <div className="cards-container">
          {tarjetasData.map((card, index) => (
            <Card
              key={index}
              titulo={card.titulo}
              valor={card.valor}
              descripcion={card.descripcion}
            />
          ))}
        </div>

        <h2>Sección de Tabla</h2>
        <Tabla datos={datosTabla} />
      </header>
    </div>
  );
}

export default App;
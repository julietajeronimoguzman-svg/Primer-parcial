import React from "react";
import "./Tabla.css";

export default function Tabla({ datos }) {
  return (
    <div className="tabla-container">
      <table className="tabla-kpi">
        <thead>
          <tr>
            <th>ID</th>
            <th>Concepto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.concepto}</td>
              <td>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import React, { useState } from "react";
import "./ItemContador.css";

const ItemContador = ({
  cantidad,
  handleRestar,
  handleSumar,
  handleAgregar,
}) => {
  return (
    <div>
      <div className="contador-container">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>
        {" "}
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemContador;

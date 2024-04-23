import React from "react";
import "./CartDetail.css";

const CartDetail = ({ item }) => {
  return (
    <div>
      <div className="Tarjetaa">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          {" "}
          <h1>{item.titulo}</h1>
          <h2>{item.precio}</h2>
          <p>{item.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;

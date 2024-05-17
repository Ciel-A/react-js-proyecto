import React, { useContext, useState } from "react";
import "./CartDetail.css";
import ItemContador from "./ItemContador";
import { CartContext } from "../../context/CartContext.jsx";

const CartDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    if (cantidad < item.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div className="Tarjetaa">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          {" "}
          <h1>{item.titulo}</h1>
          <h2> "El precio es de" {item.precio}</h2>
          <p>{item.descripcion}</p>
          <ItemContador
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => agregarAlCarrito(item, cantidad)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;

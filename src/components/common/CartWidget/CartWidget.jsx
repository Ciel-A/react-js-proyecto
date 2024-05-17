import React, { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { CartContext } from "../../context/CartContext";
import Dropdown from "react-bootstrap/Dropdown";
import "./CartWidget.css"; // Importa el archivo CSS

const CartWidget = () => {
  const { sum, carrito, setCarrito } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(sum);
  }, [sum]);

  const vaciar = () => {
    setCarrito([]);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          <Badge badgeContent={cartItems} color="error">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {carrito.map((producto) => (
            <Dropdown.Item key={producto.id} className="cart-item-container">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="product-image"
              />
              <div>
                <p>{producto.titulo}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
              </div>
            </Dropdown.Item>
          ))}
          {carrito.length === 0 && (
            <Dropdown.Item disabled>
              No hay elementos en el carrito
            </Dropdown.Item>
          )}
          <button onClick={vaciar}>vaciar</button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CartWidget;

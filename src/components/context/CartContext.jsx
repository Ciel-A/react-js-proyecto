import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Estado inicial del carrito (obtenerlo del localStorage si existe)
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [carrito, setCarrito] = useState(initialCart);

  // Función para agregar un artículo al carrito
  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];

    const productoExistente = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    setCarrito(nuevoCarrito);
  };

  // Actualizar localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  // Calcular la cantidad total de artículos en el carrito
  const sum = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ carrito, setCarrito, agregarAlCarrito, sum }}
    >
      {children}
    </CartContext.Provider>
  );
};

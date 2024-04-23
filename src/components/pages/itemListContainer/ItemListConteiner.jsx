import React, { useState, useEffect } from "react";
import "./ItemListConteiner.css";
import data from "../../../data/data.json"; // Importa el archivo de datos
import Cart from "./Cart"; // Importa el componente Cart
import { useParams } from "react-router-dom"; // Importa el hook useParams
import { pedirDatos } from "../../hooks/useFetch"; // Importa la función pedirDatos desde el hook useFetch

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [titulo, setTitulo] = useState("producto"); // Estado para almacenar el título
  const categoria = useParams().categoria; // Obtiene el parámetro de la URL llamado 'categoria'

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        // Filtra los productos por la categoría si existe
        setProductos(res.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria); // Actualiza el estado del título
      } else {
        setProductos(res); // Actualiza los productos si no hay categoría seleccionada
        setTitulo("Todos los productos"); // Establece un título genérico si no hay categoría seleccionada
      }
    });
  }, [categoria]); // Ejecuta el efecto cada vez que cambia la categoría

  return (
    <div>
      {/* Renderiza el componente Cart con los productos y el título */}
      <Cart productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListConteiner;

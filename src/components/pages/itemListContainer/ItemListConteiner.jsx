import React, { useState, useEffect } from "react";
import "./ItemListConteiner.css";
import Cart from "./Cart"; // Importa el componente Cart
import { useParams } from "react-router-dom"; // Importa el hook useParams
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [titulo, setTitulo] = useState("productos"); // Estado para almacenar el título
  const { categoria } = useParams(); // Obtiene el parámetro de la URL llamado 'categoria'

  useEffect(() => {
    const productosRef = collection(db, "productos");
    let q;

    if (categoria) {
      // Si hay una categoría, filtra por la categoría
      q = query(productosRef, where("categoria", "==", categoria));
    } else {
      // Si no hay categoría, obtiene todos los productos
      q = productosRef;
    }

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
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

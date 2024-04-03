import "./ItemListConteiner.css";
import ProductCard from "../../common/productCard/ProductCard";

const ItemListConteiner = (props) => {
  const productos = [
    { titulo: "Producto 1", imagen: "imagen1.jpg", precio: "$10" },
    { titulo: "Producto 2", imagen: "imagen2.jpg", precio: "$15" },
    { titulo: "Producto 3", imagen: "imagen3.jpg", precio: "$20" },
    { titulo: "Producto 4", imagen: "imagen4.jpg", precio: "$25" },
    { titulo: "Producto 5", imagen: "imagen5.jpg", precio: "$30" },
  ];
  return (
    <div>
      {" "}
      <p>{props.greeting}</p>
      <div className="Contenedor">
        {productos.map((producto, index) => (
          <ProductCard
            key={index} // Asegúrate de proporcionar una clave única para cada componente
            titulo={producto.titulo}
            imagen={producto.imagen}
            precio={producto.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListConteiner;

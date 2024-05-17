import { Link } from "react-router-dom";
import ProductCard from "../../common/productCard/ProductCard";

// Desestructuración de las props en la función Cart
const Cart = ({ titulo, productos }) => {
  return (
    <div>
      <div className="Contenedor">
        {productos.map((producto, index) => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            titulo={producto.titulo}
            imagen={producto.imagen}
            precio={"$" + producto.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

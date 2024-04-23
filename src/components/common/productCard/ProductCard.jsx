import { Link } from "react-router-dom";
import "./ProductCard.css";
// aqui recibo las props de ItemListConteiner y doy forma el div contendor de la tarjeta
const ProductCard = ({ id, titulo, imagen, precio }) => {
  return (
    <div>
      <div className="Tarjeta">
        <h1>{titulo}</h1>
        <img src={imagen} alt="Imagen representativa" />
        <h2>{precio}</h2>
        <button className="ver-mas">agregar</button>
        <button>
          <Link className="ver-mas" to={`/item/${id}`}>
            Ver detalle
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

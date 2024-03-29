import "./ProductCard.css";

const ProductCard = ({ titulo, imagen, precio }) => {
  return (
    <div>
      <div className="Tarjeta">
        <h1>{titulo}</h1>
        <img src={imagen} alt="Imagen representativa" />
        <h2>{precio}</h2>
      </div>
    </div>
  );
};

export default ProductCard;

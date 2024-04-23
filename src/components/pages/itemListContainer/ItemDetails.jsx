import { useEffect, useState } from "react";
import { pedirItemPorId } from "../../hooks/useFetch";
import CartDetail from "./CartDetail";
import { useParams } from "react-router-dom";

const ItemDetails = ({}) => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    pedirItemPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <CartDetail item={item} />}</div>;
};

export default ItemDetails;

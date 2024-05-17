import { useEffect, useState } from "react";

import CartDetail from "./CartDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const ItemDetails = ({}) => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    const docReft = doc(db, "productos", id);

    getDoc(docReft).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <div>{item && <CartDetail item={item} />}</div>;
};

export default ItemDetails;

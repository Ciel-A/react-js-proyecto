import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  const [cartItems, setCartItems] = useState(1);

  return (
    <div>
      <Badge badgeContent={cartItems} color="error">
        <ShoppingCartIcon fontSize="large" />
      </Badge>
    </div>
  );
};

export default CartWidget;

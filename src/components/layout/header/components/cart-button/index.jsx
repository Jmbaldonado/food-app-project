import React, { useContext } from "react";
import CartIcon from "../../../../cart/components/cart-icon/index.jsx";
import classes from "./styled.module.css";
import CartContext from "../../../../../store/cart-context.js";
const Index = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default Index;

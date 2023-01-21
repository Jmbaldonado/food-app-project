import React from "react";
import CartIcon from "../../../cart/icon/index.jsx";
import classes from "./styled.module.css";
const Index = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default Index;

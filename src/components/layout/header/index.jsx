import React from "react";
import mealsImage from "../../../assets/meals.jpg";
import classes from "./styled.module.css";
import CartButton from "./cart-button/index.jsx";
const Index = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals Image" />
      </div>
    </React.Fragment>
  );
};

export default Index;

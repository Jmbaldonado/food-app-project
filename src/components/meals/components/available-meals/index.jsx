import React from "react";
import DUMMY_MEALS from "./dummy-constants";
import classes from "./styled.module.css";
import Card from "../../../ui/card/index.jsx";
import MealItem from "../meal-item/index.jsx";
const Index = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default Index;

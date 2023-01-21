import React, { Fragment } from "react";
import MealsSummary from "./components/meals-summary";
import AvailableMeals from "./components/available-meals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

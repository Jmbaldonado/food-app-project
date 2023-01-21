import React from "react";
import classes from "./styled.module.css";

const Index = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

export default Index;

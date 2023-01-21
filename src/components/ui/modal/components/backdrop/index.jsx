import React from "react";
import classes from "./styled.module.css";
const Index = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

export default Index;

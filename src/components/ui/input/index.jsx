import React from "react";
import classes from "./styled.module.css";

const Index = React.forwardRef((props, ref) => {
  const { input, label } = props;
  const { id } = input;
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Index;

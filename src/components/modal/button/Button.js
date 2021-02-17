import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
  const { children, type, className, clickHandler } = props;

  return (
    <button
      type={type}
      className={className}
      onClick={clickHandler && clickHandler}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  className: "primary-button",
  clickHandler: null,
  type: "button",
};

export default Button;

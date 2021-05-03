import React from "react";
import MaterialButton from "@material-ui/core/Button";

const Button = ({ children, type = "button", ...rest }) => {
  return <MaterialButton {...rest}>{children}</MaterialButton>;
};

export default Button;

import React from "react";
import Input from "@material-ui/core/TextField";

const TextField = ({ value, ...rest }) => {
  return <Input {...value} {...rest} />;
};

export default TextField;

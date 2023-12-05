import React from "react";
import { Container } from "./styles";

function Button({ props, children }) {
  return <Container {...props}>{children}</Container>;
}

export default Button;

import React from "react";
import Error from "../error/error";
import { validateProps } from "../../../functions/validations/props";

const A = props => {
  if (validateProps(props)) {
    return <a href=""></a>;
  } else {
    return <Error id={1} />;
  }
};

import React from "react";
import Error from "../error/error";
import { validateProps } from "../../../functions/validations/props";

const Icon = props => {
  const keys = ["name"];
  if (validateProps(props, keys)) {
    /**
     * Element
     */
    return <span className={props.name}></span>;
  } else {
    /**
     * Error.
     */
    return <Error id={1} />;
  }
};

export default Icon;

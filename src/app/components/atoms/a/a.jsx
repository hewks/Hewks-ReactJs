import React from "react";
import Error from "../error/error";
import { validateProps } from "../../../functions/validations/props";

const A = props => {
  const keys = ["text", "type", "href"];
  if (validateProps(props, keys)) {
    switch (props.type) {
      case "blank":
        return (
          <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.text}
          </a>
        );
      default:
        break;
    }
  } else {
    return <Error id={1} />;
  }
};

export default A;

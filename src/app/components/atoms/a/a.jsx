import React from "react";
import { Link } from "react-router-dom";

const A = props => {
  switch (props.type) {
    case "blank":
      return (
        <a
          href={props.href !== undefined ? props.href : "nohref"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.text !== undefined ? props.text : "notext"}
        </a>
      );
    case "react":
      return (
        <Link to={props.href !== undefined ? props.href : "nohref"}>
          {props.text !== undefined ? props.text : "notext"}
        </Link>
      );
    default:
      break;
  }
};

export default A;

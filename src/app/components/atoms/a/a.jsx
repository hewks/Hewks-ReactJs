import React from "react";

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
    default:
      break;
  }
};

export default A;

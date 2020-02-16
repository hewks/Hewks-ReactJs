import React from "react";

const Icon = props => {
  return (
    <span className={props.name !== undefined ? props.name : "noname"}></span>
  );
};

export default Icon;

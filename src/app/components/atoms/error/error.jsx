import React from "react";
import { searchError } from "./../../../../assets/lang/es/errors";

const Error = props => {
  return <p>{searchError(props.id)}</p>;
};

export default Error;

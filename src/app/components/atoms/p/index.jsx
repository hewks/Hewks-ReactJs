import React from "react";

export default class P extends React.Component {
  render() {
    return <p>{this.props.text !== undefined ? this.props.text : "notext"}</p>;
  }
}

import React from "react";

import "./../../css/comp/wrapper.css";

export class Big extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: this.props.image
    };
  }

  render() {
    return (
      <div
        className="hw-wrapper hw-big-wrapper"
        style={{ backgroundImage: "url(" + this.state.image + ")" }}
      ></div>
    );
  }
}

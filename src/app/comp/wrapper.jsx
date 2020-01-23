import React from "react";

import "./../../css/comp/wrapper.css";

export class Big extends React.Component {
  render() {
    return (
      <div
        className="hw-wrapper hw-big-wrapper"
        style={{
          backgroundImage: "url(" + this.props.image + ")"
        }}
        ref={this.wrapper}
      >
        <div className="hw-wrapper-info">
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

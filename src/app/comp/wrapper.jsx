import React from "react";

import "./../../css/comp/wrapper.css";

export class Big extends React.Component {
  componentDidMount() {
    if (this.props.iconsAnim === true) {
      const allIcons = document.querySelectorAll(".hw-wrapper-icon");
      setTimeout(() => {
        allIcons.forEach(icon => {
          icon.classList.add("hw-icon-move");
        });
      }, 2000);
    }
  }

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
        <div className="hw-icons-container">
          <span className="hw-wrapper-icon fab fa-react"></span>
          <span className="hw-wrapper-icon fab fa-node-js"></span>
          <span className="hw-wrapper-icon fab fa-aws"></span>
          <span className="hw-wrapper-icon fab fa-js"></span>
        </div>
      </div>
    );
  }
}

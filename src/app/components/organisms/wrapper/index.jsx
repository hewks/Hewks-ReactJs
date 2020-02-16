import React from "react";
import P from "../../atoms/p";
import Title from "../../atoms/title";
import Icon from "../../atoms/icon/icon";

import "./index.css";

export default class Wrapper extends React.Component {
  render() {
    return (
      <div
        className="hw-wrapper"
        style={{
          backgroundImage: "url(" + this.props.image + ")"
        }}
      >
        <div className="hw-wrapper-info">
          <Title size={4} title={this.props.title} />
          <P text={this.props.text} />
        </div>
        <div className="hw-icons-container">
          <Icon name="hw-wrapper-icon fab fa-react" />
          <Icon name="hw-wrapper-icon fab fa-node-js" />
          <Icon name="hw-wrapper-icon fab fa-aws" />
          <Icon name="hw-wrapper-icon fab fa-js" />
        </div>
      </div>
    );
  }
}

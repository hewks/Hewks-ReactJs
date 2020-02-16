import React from "react";
import Info from "../../molecules/info";
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
        <Info
          titleSize={this.props.titleSize}
          title={this.props.title}
          text={this.props.text}
        />
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

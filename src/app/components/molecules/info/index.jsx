import React from "react";
import P from "../../atoms/p";
import Title from "../../atoms/title";

export default class Info extends React.Component {
  render() {
    return (
      <div className="hw-wrapper-info">
        <Title size={this.props.titleSize} title={this.props.title} />
        <P text={this.props.text} />
      </div>
    );
  }
}

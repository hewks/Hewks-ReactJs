import React from "react";
import Icon from "../../atoms/icon/icon";

export default class Toggler extends React.Component {
  render() {
    return (
      <div className="hw-toggler" onClick={this.props.onTogglerClick}>
        <Icon name="fas fa-bars" />
      </div>
    );
  }
}

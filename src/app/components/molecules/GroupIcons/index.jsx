import React from "react";
import Icon from "../../atoms/icon/icon";

export default class GroupIcons extends React.Component {
  constructor(props) {
    super(props);

    this.iconGroup = React.createRef();
  }

  render() {
    return (
      <div className="hw-icons-container" ref={this.iconGroup}>
        {this.props.icons.map((icon, index) => (
          <Icon name={icon} key={index} />
        ))}
      </div>
    );
  }
}

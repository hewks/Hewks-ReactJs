import React from "react";
import Info from "../../molecules/info";
import GroupIcons from "../../molecules/GroupIcons";

import "./index.css";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.iconGroup = React.createRef();
  }

  componentDidMount() {
    const iconGroup = this.iconGroup.current.iconGroup.current;
    if (this.props.anim === true) {
      setTimeout(() => {
        iconGroup.childNodes.forEach(icon => {
          icon.classList.add("hw-icon-move");
        });
      }, 2000);
    }
  }

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
        <GroupIcons ref={this.iconGroup} icons={this.props.icons} />
      </div>
    );
  }
}

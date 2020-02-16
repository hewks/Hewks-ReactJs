import React from "react";
import GroupLinks from "../../../molecules/groupLinks";
import GroupSocial from "../../../molecules/groupSocial";

import "./index.css";

export default class LeftNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.leftNav = React.createRef();
  }

  render() {
    return (
      <div className="hw-left-navigation" ref={this.leftNav}>
        <GroupLinks links={this.props.navLinks} />
        <GroupSocial links={this.props.socialLinks} />
      </div>
    );
  }
}

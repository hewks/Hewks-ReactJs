import React from "react";
import LinkGroup from "../../molecules/linkGroup/linkGroup";
import SocialLinks from "../../molecules/socialLinks/socialLinks";

import "./index.css";

export default class LeftNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.leftNav = React.createRef();
  }

  render() {
    return (
      <div className="hw-left-navigation" ref={this.leftNav}>
        <LinkGroup links={this.props.navLinks} />
        <SocialLinks links={this.props.socialLinks} />
      </div>
    );
  }
}

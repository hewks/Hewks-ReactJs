import React from "react";
import { Link } from "react-router-dom";
import Toggler from "./../../molecules/toggler";
import LinkGroup from "./../../molecules/linkGroup/linkGroup";
import SocialLinks from "../../molecules/socialLinks/socialLinks";

import "./index.css";

export default class TopNavigation extends React.Component {
  render() {
    return (
      <div className="hw-top-navigation">
        <Link to="/">Hewks</Link>
        <Toggler onTogglerClick={this.props.onTogglerClick} />
        <div className="hw-links">
          <LinkGroup links={this.props.navLinks} />
          <SocialLinks links={this.props.socialLinks} />
        </div>
      </div>
    );
  }
}

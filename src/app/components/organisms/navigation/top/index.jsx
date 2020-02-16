import React from "react";
import { Link } from "react-router-dom";
import Toggler from "../../../molecules/toggler";
import GroupLinks from "../../../molecules/groupLinks";
import GroupSocial from "../../../molecules/groupSocial";

import "./index.css";

export default class TopNavigation extends React.Component {
  render() {
    return (
      <div className="hw-top-navigation">
        <Link to="/">Hewks</Link>
        <Toggler onTogglerClick={this.props.onTogglerClick} />
        <div className="hw-links">
          <GroupLinks links={this.props.navLinks} />
          <GroupSocial links={this.props.socialLinks} />
        </div>
      </div>
    );
  }
}

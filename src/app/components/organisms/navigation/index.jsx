import React from "react";
import TopNavigation from "../topNavigation";
import LeftNavigation from "../leftNavigation";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLeftNav = this.toggleLeftNav.bind(this);
    this.leftNav = React.createRef();

    this.leftNavigation = {
      active: "hw-active-left-navigation"
    };
  }

  toggleLeftNav() {
    const leftNav = this.leftNav.current.leftNav.current;
    leftNav.classList.contains(this.leftNavigation.active)
      ? leftNav.classList.remove(this.leftNavigation.active)
      : leftNav.classList.add(this.leftNavigation.active);
  }

  render() {
    return (
      <div className="hw-navigation">
        <TopNavigation
          socialLinks={this.props.socialLinks}
          navLinks={this.props.navLinks}
          onTogglerClick={this.toggleLeftNav}
        />
        <LeftNavigation
          ref={this.leftNav}
          socialLinks={this.props.socialLinks}
          navLinks={this.props.navLinks}
        />
      </div>
    );
  }
}

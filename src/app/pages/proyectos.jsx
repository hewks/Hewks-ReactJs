import React from "react";

import { PrivateProjects, PublicProjects } from "./../comp/projects.jsx";

import "./../../assets/css/pages.css";

export default class Main extends React.Component {
  render() {
    return (
      <div className="hw-page">
        <PublicProjects />
        <PrivateProjects />
      </div>
    );
  }
}

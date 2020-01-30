import React from "react";

import { ShowServices } from "./../comp/services.jsx";

import "./../../assets/css/pages.css";

export default class Main extends React.Component {
  render() {
    return (
      <div className="hw-page">
        <ShowServices />
      </div>
    );
  }
}

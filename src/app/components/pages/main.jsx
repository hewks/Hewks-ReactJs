import React from "react";
import { Big } from "./../comp/wrapper.jsx";
import { MiniServices } from "./../comp/services.jsx";

import "./../../assets/css/pages.css";

export default class Main extends React.Component {
  render() {
    var wrapper = {};
    var services = [];

    switch (this.props.lang) {
      case "es":
        services = require("../../assets/lang/es/services/mini.jsx").default;
        wrapper = require("../../assets/lang/es/wrapper.jsx").default;
        break;
      case "en":
        services = require("../../assets/lang/es/services/mini.jsx").default;
        break;
      default:
        services = require("../../assets/lang/es/services/mini.jsx").default;
        break;
    }

    return (
      <div className="hw-page">
        <Big wrapper={wrapper} />
        {/** Photo by Zan on Unsplash */}
        <MiniServices services={services} />
      </div>
    );
  }
}

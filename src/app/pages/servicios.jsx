import React from "react";
import { AllServices } from "./../comp/services.jsx";

import "./../../assets/css/pages.css";

/**
 * import images
 */

export default class Main extends React.Component {
  render() {
    var services = [];

    switch (this.props.lang) {
      case "es":
        services = require("./../../assets/lang/es/services/big.jsx").default;
        break;
      case "en":
        services = require("./../../assets/lang/en/services/big.jsx").default;
        break;
      default:
        services = require("./../../assets/lang/en/services/big.jsx").default;
        break;
    }

    return (
      <div className="hw-page">
        <AllServices services={services} />
      </div>
    );
  }
}

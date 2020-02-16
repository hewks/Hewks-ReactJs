import React from "react";
import Wrapper from "../organisms/wrapper";

import "./index.css";

export default class Main extends React.Component {
  render() {
    var wrapper = {};

    switch (this.props.lang) {
      case "es":
        wrapper = require("../../languages/es/wrapper").default;
        break;
      default:
        break;
    }

    return (
      <div className="hw-page">
        <Wrapper
          titleSize={4}
          text={wrapper.text}
          image={wrapper.image}
          title={wrapper.title}
          icons={wrapper.icons}
          anim={wrapper.anim}
        />
      </div>
    );
  }
}

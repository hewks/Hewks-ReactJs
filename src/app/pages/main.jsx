import React from "react";

import { Big } from "./../comp/wrapper.jsx";
import Services from "./../comp/services.jsx";

import "./../../assets/css/pages.css";

import wrapperBackground from "./../../assets/img/1.jpg";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wrapperTitle: "Hewks",
      wrapperText:
        "Queremos que tu empresa crezca como nunca antes, por esto te ofrecemos las mejores herramientas de este siglo."
    };

    this.icon = ["fab fa-github"];
  }

  render() {
    return (
      <div className="hw-page">
        <Big
          image={wrapperBackground}
          title={this.state.wrapperTitle}
          text={this.state.wrapperText}
          iconsAnim={true}
          icons={this.icons}
        />
        {/** Photo by Zan on Unsplash */}
        <Services />
      </div>
    );
  }
}

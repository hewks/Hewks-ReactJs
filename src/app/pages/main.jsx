import React from "react";

import { Big } from "./../comp/wrapper.jsx";
import Services from "./../comp/services.jsx";

import "./../../css/pages.css";

import wrapperBackground from "./../../assets/img/1.jpg";

class Abilities extends React.Component {
  render() {
    return <div className="hw-abilities"></div>;
  }
}

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
      <div className="hw-intern-page">
        <Big
          image={wrapperBackground}
          title={this.state.wrapperTitle}
          text={this.state.wrapperText}
          iconsAnim={true}
          icons={this.icons}
        />
        {/** Photo by Zan on Unsplash */}
        <Services />
        <Abilities />
      </div>
    );
  }
}

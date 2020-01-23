import React from "react";

import { Big } from "./../comp/wrapper.jsx";

import "./../../css/pages.css";

import wrapperBackground from "./../../assets/img/1.jpg";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wrapperTitle: "Hewks",
      wrapperText:
        "Queremos que tu empresa crezca como nunca antes, por esto te ofrecemos las mejores herramientas de este siglo."
    };
  }

  render() {
    return (
      <div className="hw-intern-page">
        <Big
          image={wrapperBackground}
          title={this.state.wrapperTitle}
          text={this.state.wrapperText}
          hoverTrack={true}
        />
        {/** Photo by Zan on Unsplash */}
      </div>
    );
  }
}

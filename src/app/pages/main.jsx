import React from "react";

import { Big } from "./../comp/wrapper.jsx";

import "./../../css/pages.css";

import wrapperBackground from "./../../assets/img/1.jpg";

export default class Main extends React.Component {
  render() {
    return (
      <div className="hw-intern-page">
        <Big image={wrapperBackground} />
        {/** Photo by Zan on Unsplash */}
      </div>
    );
  }
}

import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./../css/main.css";

import Loader from "./comp/loader.jsx";

export default class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "es"
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="hw-page-container">
          <Loader lang={this.state.lang} />
        </div>
      </BrowserRouter>
    );
  }
}

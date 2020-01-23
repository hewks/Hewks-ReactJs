import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./../css/main.css";
import "./../css/comp/navigation.css";

import Loader from "./comp/loader.jsx";

import Main from "./pages/main.jsx";

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
          <div className="hw-navigation">
            <div className="hw-top-navigation">
              <Link to="/">Hewks</Link>
              <div className="hw-links">
                <Link to="/">Inicio</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/protafolio">Portafolio</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto">Contacto</Link>
                <div className="hw-social">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.github.com/ctrlprogrammer"
                  >
                    <span className="fab fa-github"></span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/hewks_net"
                  >
                    <span className="fab fa-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hw-page-container">
            <Route path="/" exact>
              <Main />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

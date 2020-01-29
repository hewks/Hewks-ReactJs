import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./../css/main.css";
import "./../css/comp/navigation.css";

import Loader from "./comp/loader.jsx";

import Main from "./pages/main.jsx";

export default class Router extends React.Component {
  constructor(props) {
    super(props);

    this.leftNav = React.createRef();

    this.toggleLeftNav = this.toggleLeftNav.bind(this);

    this.state = {
      lang: "es"
    };

    this.leftNavigation = {
      active: "hw-active-left-navigation"
    };
  }

  toggleLeftNav() {
    this.leftNav.current.classList.contains(this.leftNavigation.active)
      ? this.leftNav.current.classList.remove(this.leftNavigation.active)
      : this.leftNav.current.classList.add(this.leftNavigation.active);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="hw-page-container">
          <Loader lang={this.state.lang} />
          <div className="hw-navigation">
            <div className="hw-top-navigation">
              <Link to="/">Hewks</Link>
              <div className="hw-toggler" onClick={this.toggleLeftNav}>
                <span className="fas fa-bars"></span>
              </div>
              <div className="hw-links">
                <Link to="/">Inicio</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/protafolio">Portafolio</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/clientes">Clientes</Link>
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
            <div className="hw-left-navigation" ref={this.leftNav}>
              <Link to="/">Inicio</Link>
              <Link to="/servicios">Servicios</Link>
              <Link to="/protafolio">Portafolio</Link>
              <Link to="/proyectos">Proyectos</Link>
              <Link to="/clientes">Clientes</Link>
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

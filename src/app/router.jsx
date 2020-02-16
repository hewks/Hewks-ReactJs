import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./../assets/css/main.css";

import Loader from "./comp/loader.jsx";
import Main from "./pages/main.jsx";
import Servicios from "./pages/servicios.jsx";
import Portafolio from "./pages/portafolio.jsx";
import Proyectos from "./pages/proyectos.jsx";
import Contacto from "./pages/contacto.jsx";
import Footer from "./comp/footer.jsx";
import Navigation from "./components/organisms/navigation";

export default class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "es"
    };
  }

  render() {
    const socialLinks = [
      {
        type: "blank",
        href: "https://github.com/hewks",
        icon: "fab fa-github"
      },
      {
        type: "blank",
        href: "https://instagram.com/hewks_net",
        icon: "fab fa-instagram"
      }
    ];

    const navLinks = [
      {
        type: "react",
        href: "/",
        text: "Inicio"
      },
      {
        type: "react",
        href: "/servicios",
        text: "Servicios"
      },
      {
        type: "react",
        href: "/portafolio",
        text: "Portafolio"
      },
      {
        type: "react",
        href: "/proyectos",
        text: "Proyectos"
      },
      {
        type: "blank",
        href: "https://localhost:3001",
        text: "Clientes"
      },
      {
        type: "react",
        href: "/contacto",
        text: "Contacto"
      }
    ];

    return (
      <BrowserRouter>
        <div className="hw-page-container">
          <Loader lang={this.state.lang} />
          <Navigation socialLinks={socialLinks} navLinks={navLinks} />
          <div className="hw-intern-page">
            <Switch>
              <Route path="/" exact>
                <Main lang={this.state.lang} />
              </Route>
              <Route path="/servicios" exact>
                <Servicios lang={this.state.lang} />
              </Route>
              <Route path="/portafolio" exact>
                <Portafolio lang={this.state.lang} />
              </Route>
              <Route path="/proyectos" exact>
                <Proyectos lang={this.state.lang} />
              </Route>
              <Route path="/contacto" exact>
                <Contacto lang={this.state.lang} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

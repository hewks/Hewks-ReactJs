import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./../assets/css/main.css";

import Loader from "./comp/loader.jsx";
/**
 * Pages
 */
import Main from "./components/pages/main";
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
    var navigation = {};

    switch (this.state.lang) {
      case "es":
        navigation = require("./languages/es/navigation");
        break;
      case "en":
        navigation = require("./languages/en/navigation");
        break;
      default:
        break;
    }

    return (
      <BrowserRouter>
        <div className="hw-page-container">
          <Loader lang={this.state.lang} />
          <Navigation
            socialLinks={navigation.default.socialLinks}
            navLinks={navigation.default.navLinks}
          />
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

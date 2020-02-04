import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./../assets/css/main.css";
import "./../assets/css/comp/navigation.css";

import Loader from "./comp/loader.jsx";
import Navigation from "./comp/navigation.jsx";
import Main from "./pages/main.jsx";
import Servicios from "./pages/servicios.jsx";
import Portafolio from "./pages/portafolio.jsx";
import Proyectos from "./pages/proyectos.jsx";
import Footer from "./comp/footer.jsx";

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
          <Navigation />
          <div className="hw-intern-page">
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/servicios" exact>
              <Servicios />
            </Route>
            <Route path="/portafolio" exact>
              <Portafolio />
            </Route>
            <Route path="/proyectos" exact>
              <Proyectos />
            </Route>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

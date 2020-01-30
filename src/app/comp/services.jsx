import React from "react";
import { Link } from "react-router-dom";

import "./../../assets/css/comp/services.css";

import softwareDev from "./../../assets/img/2.jpg";

class Service extends React.Component {
  render() {
    return (
      <div className="hw-service">
        <div
          className="hw-service-image"
          style={{ backgroundImage: "url(" + this.props.image + ")" }}
        ></div>
        <div className="hw-service-info">
          <h4>{this.props.alt}</h4>
          <p>{this.props.text}</p>
          <Link to="/services">
            <span className="fas fa-search-plus"></span>
          </Link>
        </div>
      </div>
    );
  }
}

export default class Services extends React.Component {
  render() {
    return (
      <div className="hw-services-container">
        <h4 className="hw-services-title">Nuestros servicios</h4>
        <div className="hw-services">
          <Service
            image={softwareDev}
            alt={"Desarrollo web"}
            text={
              "Diseñamos, administramos y optimizamos su pagina web. Con ella sus clientes podran apreciar sus productos y servicios de una manera optima y rapida."
            }
          />

          <Service
            image={softwareDev}
            alt={"Contenido audiovisual"}
            text={
              "Nuestro equipo fotografico y de diseño captura de manera ideal su marca y sus productos, de esta manera sus clientes mantendran la imagen correcta de su empresa."
            }
          />
          <Service
            image={softwareDev}
            alt={"Marketing digital"}
            text={
              "Proponemos estrategia de marketing para que su negocio crezca al ritmo de la tecnologia."
            }
          />
        </div>
      </div>
    );
  }
}

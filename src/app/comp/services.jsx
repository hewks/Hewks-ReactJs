import React from "react";
import { Link } from "react-router-dom";

import "./../../assets/css/comp/services.css";

import softwareDev from "./../../assets/img/2.jpg";

export class ShowServices extends React.Component {
  render() {
    return (
      <div className="hw-services-show">
        <h4 className="hw-services-title">Nuestros servicios</h4>
        <Show
          image={softwareDev}
          title={"Desarrollo web"}
          page={"desarrolloweb"}
          text={"Creación, diseño y administración de paginas web."}
        />
        <Show
          image={softwareDev}
          title={"Creación de contenido audiovisual"}
          page={"contenidoaudiovisual"}
          text={
            "Edicion de videos, creacion de publicidad y toma de fotografias."
          }
        />
        <Show
          image={softwareDev}
          title={"Marketing Digital"}
          page={"marketingdigital"}
          text={
            "Diseño de estrategias y metodos para alcanzar un mayor numero de personas."
          }
        />
        <Show
          image={softwareDev}
          title={"Administracion de redes sociales"}
          page={"socialnetwork"}
          text={"Instagram, Facebook, Google+, Youtube, Pinterest."}
        />
        <Show
          image={softwareDev}
          title={"Desarrollo de software"}
          page={"desarrollosoftware"}
          text={"Creacion y estructuracion de aplicaciones empresariales."}
        />
        <Show
          image={softwareDev}
          title={"Administracion de bases de datos"}
          page={"databaseadmin"}
          text={"Creación, control y administración en MySQL y MongoDB"}
        />
        <Show
          image={softwareDev}
          title={"Creación de APIs"}
          page={"creacionapi"}
          text={
            "Estructuración y construcción de APIs para hacer peticiones al backend."
          }
        />
        <Show
          image={softwareDev}
          title={"Estructuración de Backend"}
          page={"creacionbackend"}
          text={"Creación de plataformas backend en PHP Y NodeJs"}
        />
      </div>
    );
  }
}

export class Show extends React.Component {
  render() {
    return (
      <Link
        to={this.props.page}
        className="hw-show"
        style={{ backgroundImage: "url(" + this.props.image + ")" }}
      >
        <div className="hw-black-cover">
          <span>{this.props.text}</span>
        </div>
        <div className="hw-bottom">
          <span>{this.props.title}</span>
        </div>
      </Link>
    );
  }
}

export class Service extends React.Component {
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

export class Services extends React.Component {
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
            alt={"Bases de datos."}
            text={
              "Creacion, administracion y analisis de bases de datos SQL (MySQL) Y NoSQL (MongoDB)."
            }
          />
        </div>
      </div>
    );
  }
}

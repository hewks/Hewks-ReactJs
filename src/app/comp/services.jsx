import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/comp/portfolio.css";
import "./../../assets/css/comp/services.css";

/**
 *
 * Show services
 *
 */

export class MiniService extends React.Component {
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
          <Link to="/servicios">
            <span className="fas fa-search-plus"></span>
          </Link>
        </div>
      </div>
    );
  }
}

export class MiniServices extends React.Component {
  render() {
    var services = [];

    if (this.props.services !== undefined) {
      this.props.services.forEach((service, index) => {
        services.push(
          <MiniService
            key={index}
            image={service.image}
            alt={service.alt}
            text={service.text}
          />
        );
      });
    }

    return (
      <div className="hw-services-container">
        <h4 className="hw-services-title">Nuestros servicios</h4>
        <div className="hw-services">{services}</div>
        <div className="hw-show-more-services">
          <h5>Quieres ver todos nuestros servicios?</h5>
          <Link to="/servicios">Ver todos los servicios</Link>
        </div>
      </div>
    );
  }
}

export class AllServices extends React.Component {
  render() {
    var services = [];

    if (this.props.services !== undefined) {
      this.props.services.forEach((service, index) => {
        services.push(
          <div className="hw-work" key={index}>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + service.image + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">{service.title}</h4>
                {service.texts}
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">{service.abilities}</ul>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="hw-portfolio">
        <div className="hw-works">
          {services}
          <div className="hw-proyects">
            <h5>Quieres participar en nuestros proyectos?</h5>
            <Link to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </div>
      </div>
    );
  }
}

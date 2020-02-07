import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/comp/projects.css";

import softwareDevImg from "./../../assets/img/8.jpg";

/**
 *
 * Show proyects
 *
 */

/**
 * Private template
 */

export class Private extends React.Component {
  render() {
    return (
      <div className="hw-work">
        <div
          className="hw-work-image"
          style={{ backgroundImage: "url(" + this.props.image + ")" }}
        ></div>
        <div className="hw-work-info">
          <div className="hw-info-container">
            <h4 className="hw-title">{this.props.title}</h4>
            {this.props.texts}
            <div className="hw-abilities">
              <h5>Habilidades</h5>
              <ul className="hw-abil">{this.props.abilities}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Public template
 */

export class Public extends React.Component {
  render() {
    return (
      <div className="hw-work">
        <div
          className="hw-work-image"
          style={{ backgroundImage: "url(" + this.props.image + ")" }}
        ></div>
        <div className="hw-work-info">
          <div className="hw-info-container">
            <h4 className="hw-title">{this.props.title}</h4>
            {this.props.texts}
            <div className="hw-abilities">
              <h5>Habilidades</h5>
              <ul className="hw-abil">{this.props.abilities}</ul>
            </div>
            <Link className="hw-show-more" to="/proyectosinfo">
              Quiero participar
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Private projects
 * */

export class PrivateProjects extends React.Component {
  render() {
    return (
      <div className="hw-portfolio">
        <h4 className="hw-title">Proyectos privados</h4>
        <div className="hw-works">
          <Private
            title={"Al Romero Natural"}
            image={softwareDevImg}
            texts={[
              <p key="1">
                Plataforma ECommerce para empresas pequeñas. Administracion de
                inventarios, control de productos, visualizacion de ventas y
                manejo de envios.
              </p>,
              <p key="2">
                Integracion de worpress para manejo de publicaciones.
              </p>
            ]}
            abilities={[
              <ul key="1">
                <li>ECommerce</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>Codeigniter</li>
                <li>Wordpress</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            ]}
          />
          <Private
            title={"Miler Lagos"}
            image={softwareDevImg}
            texts={[
              <p key="1">
                Integracion de Wordpress para el manejo de paginas,
                publicaciones y clientes por medio de un formulario de contacto.
              </p>
            ]}
            abilities={[
              <ul key="1">
                <li>ECommerce</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>Codeigniter</li>
                <li>Wordpress</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            ]}
          />
          {/*<Private
            title={"Hewks Link"}
            image={softwareDevImg}
            texts={[
              <p key="1">
                Software para el control de paginas web, enlace con cliente
                backend que administra los datos de cada pagina web por
                separado.
              </p>,
              <p key="2">
                Script que recolecta datos importantes de las paginas web
                suministradas o conectadas a Hewks.net
              </p>
            ]}
            abilities={[
              <ul key="1">
                <li>Javascript</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>ReactJs</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            ]}
          />*/}
          {/*<Private
            title={"Hewks Proyects"}
            image={softwareDevImg}
            texts={[
              <p key="1">
                Plataforma para desarrolladores novatos. Su principal
                funci&oacute;n ser&aacute; permitir el acceso de desarrolladores
                a proyectos pequeños y grandes.
              </p>,
              <p key="2">
                Script que recolecta datos importantes de las paginas web
                suministradas o conectadas a Hewks.net
              </p>
            ]}
            abilities={[
              <ul key="1">
                <li>OpenSource</li>
                <li>Developers</li>
              </ul>
            ]}
          />*/}
        </div>
      </div>
    );
  }
}

/**
 * Public projects
 * */

export class PublicProjects extends React.Component {
  render() {
    return (
      <div className="hw-portfolio">
        <h4 className="hw-title">Proyectos publicos</h4>
        <div className="hw-works">
          <Public
            title={"desarrollo de software"}
            image={softwareDevImg}
            texts={[
              <p key="1">
                Diseñamos software especializado para automatizar y controlar el
                funcionamiento de tu empresa.
              </p>,
              <p key="2">
                Ahorra tiempo y dinero invirtiendo en software para tu empresa.
              </p>
            ]}
            abilities={[
              <li key="1">
                Plataformas Desktop
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </li>,
              <li key="2">
                Plataformas web
                <ul>
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>ElectronJs</li>
                  <li>NodeJs</li>
                  <li>PHP</li>
                  <li>Codeigniter</li>
                </ul>
              </li>
            ]}
          />
        </div>
        {/**
         * Proyects button
         */}
        <div className="hw-proyects">
          <h5>Quieres participar en uno de nuestros proyectos?</h5>
          <Link to="/proyectosinfo">Quiero participar.</Link>
        </div>
      </div>
    );
  }
}

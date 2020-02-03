import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/comp/portfolio.css";
import "./../../assets/css/comp/services.css";

import audiovisualContImg from "./../../assets/img/3.jpg";
import webDevelopImg from "./../../assets/img/4.jpg";
import digitalMarkImg from "./../../assets/img/5.jpg";
import softwareDevImg from "./../../assets/img/8.jpg";
import databaseImg from "./../../assets/img/6.jpg";
import linuxServersImg from "./../../assets/img/7.jpg";

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
            image={webDevelopImg}
            alt={"Desarrollo web"}
            text={
              "Diseñamos, administramos y optimizamos su pagina web. Con ella sus clientes podran apreciar sus productos y servicios de una manera optima y rapida."
            }
          />

          <Service
            image={digitalMarkImg}
            alt={"Marketing digital."}
            text={
              "Formulamos estrategias digitales para que tu empresa crezca por medio de las redes sociales."
            }
          />
        </div>
        <div className="hw-show-more-services">
          <h5>Quieres ver todos nuestros servicios?</h5>
          <Link to="/servicios">Ver todos los servicios</Link>
        </div>
      </div>
    );
  }
}

export class ShowServices extends React.Component {
  render() {
    return (
      <div className="hw-portfolio">
        <div className="hw-works">
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + webDevelopImg + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Diseño y desarrollo de paginas web</h4>
                <p>
                  Diseñamos tu sitio web pensando en la escalabilidad, de esta
                  manera tu plataforma podra crecer al igual que tu empresa.
                </p>
                <p>Creamos y administramos tu sitio web.</p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Wordpress</li>
                    <li>Codeigniter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + softwareDevImg + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Desarrollo de software</h4>
                <p>
                  Diseñamos software especializado para automatizar y controlar
                  el funcionamiento de tu empresa.
                </p>
                <p>
                  Ahorra tiempo y dinero invirtiendo en software para tu
                  empresa.
                </p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>
                      Plataformas Desktop
                      <ul>
                        <li>Python</li>
                        <li>Java</li>
                      </ul>
                    </li>
                    <li>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + audiovisualContImg + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Creacion de contenido audiovisual</h4>
                <p>
                  Fotografia a productos, Fotografia de escenarios, creacion de
                  videos publicitarios, creacion de videos sobre eventos.
                </p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>Fotograf&iacute;a.</li>
                    <li>Edici&oacute;n de imagenes.</li>
                    <li>Fotografia de eventos.</li>
                    <li>Creacion de videos sobre eventos.</li>
                    <li>Edicion de Videos.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + digitalMarkImg + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Marketing Digital</h4>
                <p>
                  Formulamos estrategias digitales para que tu empresa crezca
                  por medio de las redes sociales.
                </p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>Outbound Marketing.</li>
                    <li>Inbound Marketing.</li>
                    <li>Uso de herramientas publicitarias.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + databaseImg + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">
                  Administraci&oacute;n de bases de datos.
                </h4>
                <p>
                  Administramos, controlamos y centralizamos todas su
                  informacion usando sistemas para la creacion de bases de
                  datos.
                </p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>
                      Bases de datos SQL
                      <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </li>
                    <li>
                      Bases de datos NoSQL
                      <ul>
                        <li>MongoDB</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + linuxServersImg + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Administracion de servidores</h4>
                <p>
                  Creacion y administracion de servidores Linux en instancias
                  EC2, manejo de cerficados SSL y construccion de entornos
                  basados en docker containers.
                </p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>Linux</li>
                    <li>SSL</li>
                    <li>AWS</li>
                    <li>Ubuntu</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hw-proyects">
            <h5>Quieres participar en nuestros proyectos?</h5>
            <Link to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";

import "../../assets/css/comp/projects.css";

import softwareDevImg from "./../../assets/img/8.jpg";

/**
 *
 * Show proyects
 *
 */

/** Proyects */

export class Project extends React.Component {
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

/** Private projects */

export class PrivateProjects extends React.Component {
  render() {
    return (
      <div className="hw-portfolio">
        <h4 className="hw-title">Proyectos privados</h4>
        <div className="hw-works">
          <Project
            title={"desarrollo de software"}
            image={softwareDevImg}
            texts={[
              <p>
                Diseñamos software especializado para automatizar y controlar el
                funcionamiento de tu empresa.
              </p>,
              <p>
                Ahorra tiempo y dinero invirtiendo en software para tu empresa.
              </p>
            ]}
            abilities={[
              <li>
                Plataformas Desktop
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </li>,
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
            ]}
          />
        </div>
      </div>
    );
  }
}

/** Public projects */

export class PublicProjects extends React.Component {
  render() {
    return (
      <div className="hw-portfolio">
        <h4 className="hw-title">Proyectos publicos</h4>
        <div className="hw-works">
          <Project
            title={"desarrollo de software"}
            image={softwareDevImg}
            texts={[
              <p>
                Diseñamos software especializado para automatizar y controlar el
                funcionamiento de tu empresa.
              </p>,
              <p>
                Ahorra tiempo y dinero invirtiendo en software para tu empresa.
              </p>
            ]}
            abilities={[
              <li>
                Plataformas Desktop
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </li>,
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
            ]}
          />
        </div>
      </div>
    );
  }
}

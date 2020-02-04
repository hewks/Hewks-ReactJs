import React from "react";

import { Link } from "react-router-dom";

import "../../assets/css/comp/portfolio.css";

/**
 * Carga de imagenes
 */

/**
 * Restaurante
 */

import restOne from "./../../assets/img/portfolio/restaurante_1.png";
import restTwo from "./../../assets/img/portfolio/restaurante_2.png";
import restThree from "./../../assets/img/portfolio/restaurante_3.jpg";
import restFour from "./../../assets/img/portfolio/restaurante_4.jpg";
import restFive from "./../../assets/img/portfolio/restaurante_5.jpg";

/**
 * Grow shop
 */

import growOne from "./../../assets/img/portfolio/grow_1.jpeg";
import growTwo from "./../../assets/img/portfolio/grow_2.jpeg";
import growThree from "./../../assets/img/portfolio/grow_3.jpeg";
import growFour from "./../../assets/img/portfolio/grow_4.jpeg";
import growFive from "./../../assets/img/portfolio/grow_5.jpeg";

/**
 * Luces navidad
 */

import lightOne from "./../../assets/img/portfolio/luces_1.jpg";
import lightTwo from "./../../assets/img/portfolio/luces_2.jpg";
import lightThree from "./../../assets/img/portfolio/luces_3.jpg";
import lightFour from "./../../assets/img/portfolio/luces_4.jpg";
import lightFive from "./../../assets/img/portfolio/luces_5.jpg";

export class Portfolio extends React.Component {
  componentDidMount() {
    const allWorkbuttons = document.querySelectorAll(".hw-show-more");
    const activeClass = "hw-active-show-more-container";
    allWorkbuttons.forEach(btn => {
      btn.addEventListener("click", e => {
        let showMoreCont = document.getElementById(
          "hw-show-more-" + btn.dataset.cont
        );
        if (showMoreCont !== null) {
          if (showMoreCont.classList.contains(activeClass)) {
            showMoreCont.classList.remove(activeClass);
            btn.innerHTML = "Ver más";
          } else {
            showMoreCont.classList.add(activeClass);
            btn.innerHTML = "Ver menos";
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="hw-portfolio">
        <div className="hw-works">
          {/**
           * Restaurante la 72
           * */}
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + restFive + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Restaurante la 72</h4>
                <p>
                  Fotografia y edicion de imagenes del menú. Tambien se
                  construyo el software para analizar las estadisticas de
                  crecimiento , los gastos, los ingresos, el inventario y los
                  clientes.
                </p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>Fotograf&iacute;a</li>
                    <li>Edici&oacute;n de imagenes</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MySQL</li>
                    <li>Codeigniter</li>
                  </ul>
                </div>
                <button className="hw-show-more" data-cont="1">
                  Ver más
                </button>
              </div>
            </div>
          </div>
          <div className="hw-show-more-container" id="hw-show-more-1">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + restThree + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + restFour + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + restOne + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + restTwo + ")" }}
            ></div>
          </div>

          {/**
           * Monkey Jounkie Grow Shop
           * */}
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + growOne + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Monkey Jounkie Grow Shop</h4>
                <p>
                  Fotografia de productos, edición de imagenes y administracion
                  de red social (Instagram)
                </p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>Fotograf&iacute;a</li>
                    <li>Edici&oacute;n de imagenes</li>
                    <li>Administraci&oacute;n de redes sociales</li>
                    <li>Instagram</li>
                  </ul>
                </div>
                <button className="hw-show-more" data-cont="2">
                  Ver más
                </button>
              </div>
            </div>
          </div>
          <div className="hw-show-more-container" id="hw-show-more-2">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + growTwo + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + growThree + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + growFour + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + growFive + ")" }}
            ></div>
          </div>

          {/**
           * Luces de Navidad Bogotá;
           * */}
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + lightOne + ")" }}
            ></div>
            <div className="hw-work-info">
              <div className="hw-info-container">
                <h4 className="hw-title">Luces de Navidad Bogot&aacute;</h4>
                <p>Fotografia de productos, edición de imagenes.</p>
                <div className="hw-abilities">
                  <h5>Habilidades</h5>
                  <ul className="hw-abil">
                    <li>Fotograf&iacute;a</li>
                    <li>Edici&oacute;n de imagenes</li>
                  </ul>
                </div>
                <button className="hw-show-more" data-cont="3">
                  Ver más
                </button>
              </div>
            </div>
          </div>
          <div className="hw-show-more-container" id="hw-show-more-3">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + lightTwo + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + lightThree + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + lightFour + ")" }}
            ></div>
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + lightFive + ")" }}
            ></div>
          </div>

          {/**
           * Proyects button
           */}
          <div className="hw-proyects">
            <h5>Quieres ver en que estamos trabajando? </h5>
            <Link to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </div>
      </div>
    );
  }
}

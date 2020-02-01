import React from "react";

import { Link } from "react-router-dom";

import "../../assets/css/comp/portfolio.css";
import WebDevelopment from "./../../assets/img/1.jpg";

export class Total extends React.Component {
  componentDidMount() {
    const allWorks = document.querySelectorAll(".hw-work");
    allWorks.forEach(work => {
      work.addEventListener("click", e => {
        console.log(e);
      });
    });
  }

  render() {
    return (
      <div className="hw-portfolio">
        <div className="hw-works">
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + WebDevelopment + ")" }}
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
                <button className="hw-show-more">Ver más</button>
              </div>
            </div>
          </div>
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + WebDevelopment + ")" }}
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
                <button className="hw-show-more">Ver más</button>
              </div>
            </div>
          </div>
          <div className="hw-work">
            <div
              className="hw-work-image"
              style={{ backgroundImage: "url(" + WebDevelopment + ")" }}
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
                <button className="hw-show-more">Ver más</button>
              </div>
            </div>
          </div>
          <div className="hw-proyects">
            <h5>Quieres ver en que estamos trabajando? </h5>
            <Link to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </div>
      </div>
    );
  }
}

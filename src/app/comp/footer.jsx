import React from "react";
import { Link } from "react-router-dom";

import "./../../assets/css/comp/footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="hw-footer">
        <div className="hw-footer-sec hw-footer-nav">
          <span className="hw-footer-sec-title">Navegaci&oacute;n</span>
          <div className="hw-links">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>

        <div className="hw-footer-sec hw-footer-info">
          <span className="hw-footer-sec-title">Informaci&oacute;n</span>
          <div className="hw-links">
            <div className="hw-i">
              <span className="hw-title">Empresa</span>
              <span>Hewks</span>
              <span>
                Contacto: <a href="tel:+573124148698">(+57) 3124148698</a>
              </span>
              <span>
                Email: <a href="mailto:hewksorgnet@gmail.com">mail@hewks.net</a>
              </span>
              <span>Bogot&aacute;, Colombia</span>
            </div>
            <div className="hw-i">
              <span className="hw-title">Desarrollador</span>
              <span>CtrlProgrammer</span>
              <span>
                Github:{" "}
                <a href="http://github.com/ctrlprogrammer">Repositorio</a>
              </span>
              <span>
                Instagram:{" "}
                <a href="http://instagram.com/ctrlprogrammer99">
                  @ctrlprogrammer99
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="hw-footer-sec hw-footer-social">
          <span className="hw-footer-sec-title">Social</span>
          <div className="hw-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/hewks"
            >
              <span className="fab fa-github"></span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/hewks_net"
            >
              <span className="fab fa-instagram"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/molecules/socialLinks/socialLinks";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.leftNav = React.createRef();

    this.toggleLeftNav = this.toggleLeftNav.bind(this);

    this.state = {
      lang: "es"
    };

    this.leftNavigation = {
      active: "hw-active-left-navigation"
    };
  }

  toggleLeftNav() {
    this.leftNav.current.classList.contains(this.leftNavigation.active)
      ? this.leftNav.current.classList.remove(this.leftNavigation.active)
      : this.leftNav.current.classList.add(this.leftNavigation.active);
  }

  render() {
    const socialLinks = [
      {
        type: "blank",
        href: "https://github.com/hewks",
        icon: "fab fa-github"
      },
      {
        type: "blank",
        href: "https://instagram.com/hewks_net",
        icon: "fab fa-instagram"
      }
    ];

    return (
      <div className="hw-navigation">
        <div className="hw-top-navigation">
          <Link to="/">Hewks</Link>
          <div className="hw-toggler" onClick={this.toggleLeftNav}>
            <span className="fas fa-bars"></span>
          </div>
          <div className="hw-links">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://localhost:3001"
            >
              Clientes
            </a>
            <Link to="/contacto">Contacto</Link>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        <div className="hw-left-navigation" ref={this.leftNav}>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/portafolio">Portafolio</Link>
          <Link to="/proyectos">Proyectos</Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://localhost:3001"
          >
            Clientes
          </a>
          <Link to="/contacto">Contacto</Link>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    );
  }
}

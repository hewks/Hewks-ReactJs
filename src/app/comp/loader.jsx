import React from "react";
import "./../../css/comp/loader.css";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.lang = {
      es: {
        loaderInfo: "Desarrollo web"
      },
      en: {
        loaderInfo: "Web development"
      }
    };

    this.loader = {
      container: React.createRef(),
      active: "hw-active-page-loader",
      time: 2000
    };

    this.state = {
      loaderInfo: this.lang.es.loaderInfo
    };
  }

  componentDidMount() {
    this.changeLang();
    this.start();
    setTimeout(() => {
      this.end();
    }, this.loader.time);
  }

  changeLang() {
    switch (this.props.lang) {
      case "en":
        this.setState({ loaderInfo: this.lang.en.loaderInfo });
        break;
      default:
        this.setState({ loaderInfo: this.lang.es.loaderInfo });
        break;
    }
  }

  start() {
    this.loader.container.current.classList.add(this.loader.active);
  }

  end() {
    this.loader.container.current.classList.remove(this.loader.active);
  }

  render() {
    return (
      <div className="hw-page-loader" ref={this.loader.container}>
        <div className="hw-loader-container">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
        <div className="hw-loader-info">
          <h4>Hewks</h4>
          <p>{this.state.loaderInfo}</p>
        </div>
      </div>
    );
  }
}

import React from "react";

import "./../../assets/css/comp/forms.css";

/**
 *
 * Input creator
 *
 */

export class Input extends React.Component {
  render() {
    return (
      <div className="hw-form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
        />
      </div>
    );
  }
}

/**
 *
 * Form template creator
 *
 */

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();

    this.state = {
      inputs: []
    };
  }

  componentDidMount() {
    this.createInputs();
  }

  createInputs() {
    var inputs = [];
    this.props.inputs.forEach((input, index) => {
      inputs.push(
        <Input
          key={index}
          name={input.name}
          placeholder={input.placeholder}
          label={input.label}
          type={input.type}
        />
      );
    });
    this.setState({ inputs: inputs });
  }

  async send(e) {
    e.preventDefault();
    const formInputs = this.form.current.elements;
    var inputs = {};

    for (var count = 0; count < this.props.inputs.length; count++) {
      inputs[formInputs[count].name] = formInputs[count].value;
    }

    const req = await fetch(this.props.send.url, {
      method:
        this.props.send.method !== undefined ? this.props.send.method : "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json"
      }
    });
    await req.json();
  }

  render() {
    return (
      <form className="hw-form" ref={this.form}>
        {this.state.inputs}
        <div className="hw-submit">
          <button className="hw-submit-button" onClick={e => this.send(e)}>
            Enviar
          </button>
        </div>
      </form>
    );
  }
}

/**
 *
 * Contact form creator
 *
 */

export class Contact extends React.Component {
  render() {
    const inputs = [
      {
        name: "customerName",
        label: "Nombre Completo",
        type: "text",
        placeholder: "Nombre completo"
      },
      {
        name: "customerEmail",
        label: "Correo electonico",
        type: "email",
        placeholder: "Correo electronico"
      }
    ];

    const send = {
      url: "http://localhost:4500/requests",
      method: "POST"
    };

    return (
      <div className="hw-contact-form">
        <h4>Contacto</h4>
        <small>
          Despues de que envies tus datos nos pondremos en contacto contigo.
          Tambien puedes llamarnos al{" "}
          <a rel="noopener noreferrer" target="_blank" href="tel:+573134148698">
            (+57) 3124148698
          </a>
        </small>
        <Form inputs={inputs} send={send} />
      </div>
    );
  }
}

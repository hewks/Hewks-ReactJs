import React from "react";

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

  render() {
    return <form className="hw-form">{this.state.inputs}</form>;
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
        name: "name",
        label: "Nombre Completo",
        type: "text",
        placeholder: "Nombre completo"
      },
      {
        name: "email",
        label: "Correo electonico",
        type: "email",
        placeholder: "Correo electronico"
      }
    ];
    return (
      <div className="hw-contact-form">
        <Form inputs={inputs} />
      </div>
    );
  }
}

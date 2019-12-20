import React, { Component } from "react";
import { FormErrors } from "./FormErrors";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: "",
      Apellidos: "",
      Email: "",
      Mensaje: "",
      formErrors: { Email: "", Nombre: "", Apellidos: "", Mensaje: "" },
      EmailValid: false,
      NombreValid: false,
      ApellidosValid: false,
      MensajeValid: false,
      formValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let EmailValid = this.state.EmailValid;
    let NombreValid = this.state.NombreValid;
    let ApellidosValid = this.state.ApellidosValid;
    let MensajeValid = this.state.MensajeValid;

    switch (fieldName) {
      case "Email":
        EmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.Email = EmailValid ? "" : " es incorrecto";
        break;
      case "Nombre":
        NombreValid = value.length >= 3;
        fieldValidationErrors.Nombre = NombreValid ? "" : " muy corto";
        break;
      case "Apellidos":
        ApellidosValid = value.length >= 3;
        fieldValidationErrors.Apellidos = ApellidosValid ? "" : " muy corto";
        break;
      case "Mensaje":
        MensajeValid = value.length >= 10;
        fieldValidationErrors.Mensaje = MensajeValid ? "" : " muy corto";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        EmailValid: EmailValid,
        NombreValid: NombreValid,
        ApellidosValid: ApellidosValid,
        MensajeValid: MensajeValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.NombreValid &&
        this.state.ApellidosValid &&
        this.state.EmailValid &&
        this.state.MensajeValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div>
        <form
          className="mb-2"
          method="POST"
          action="https://formspree.io/dalmadxx@gmail.com"
        >
          <h2 className="text-center">Formulario de Contacto</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.Nombre
            )}`}
          >
            <label htmlFor="Nombre">Nombre:</label>
            <input
              type="Nombre"
              required
              className="form-control border border-success"
              name="Nombre"
              placeholder="Nombre"
              value={this.state.Nombre}
              onChange={this.handleUserInput}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.Apellidos
            )}`}
          >
            <label htmlFor="Apellidos">Apellidos:</label>
            <input
              type="Apellidos"
              required
              className="form-control border border-success"
              name="Apellidos"
              placeholder="Apellido"
              value={this.state.Apellidos}
              onChange={this.handleUserInput}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.Email
            )}`}
          >
            <label htmlFor="Email">Correo Electrónico:</label>
            <input
              type="Email"
              required
              className="form-control border border-success"
              name="Email"
              placeholder="Email"
              value={this.state.Email}
              onChange={this.handleUserInput}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.Mensaje
            )}`}
          >
            <label htmlFor="Nombre">Escribenos tu mensaje:</label>
            <textarea
              type="Mensaje"
              required
              className="form-control border border-success"
              name="Mensaje"
              placeholder="Mensaje"
              value={this.state.Mensaje}
              onChange={this.handleUserInput}
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-success w100">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

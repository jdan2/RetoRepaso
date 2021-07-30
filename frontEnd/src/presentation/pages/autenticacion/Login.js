import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle} from "../../../infrastructure/services/firebase/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

    async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container text-center">
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1>
            
            <Link className="title ml-2" to="/">
              Estacionamiento JDS
            </Link>
          </h1>
          <p className="lead">
            Complete el siguiente formulario para iniciar sesión en su cuenta.
          </p>
          <div className="form-group ">
            <input
              className="form-control text-center"
              placeholder="Correo Electronico"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control text-center"
              placeholder="Contraseña"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">Login</button>
          </div>
            <p>O</p>
            <button className="btn btn-danger mr-2" onClick={this.googleSignIn} type="button">
              Ingresa con Google 
            </button>
          <hr />
          <p>
            ¿No tienes una cuenta? <Link to="/signup">Registrate</Link>
          </p>
        </form>
      </div>
    );
  }
}
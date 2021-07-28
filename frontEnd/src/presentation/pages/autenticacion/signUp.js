import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup, signInWithGoogle } from "../../../infrastructure/services/firebase/auth";

export default class SignUp extends Component {
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
      await signup(this.state.email, this.state.password);
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
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            
            <Link className="title ml-2" to="/">Estacionamiento JDS</Link>
          </h1>
          <p className="lead">Complete el formulario para crear una cuenta.</p>
          <div className="form-group">
            <input
              className="form-control text-center"
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control text-center"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            ></input>
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">Registrarse</button>
            <br/><br/>
            <p>O</p>
            <button className="btn btn-danger mr-2" onClick={this.googleSignIn} type="button">
              Ingresa con Google
            </button>
          </div>
          <hr></hr>
          <p>
            ¿Ya tienes una cuenta? <Link to="/">Iniciar Sesion</Link>
          </p>
        </form>
      </div>
    );
  }
}
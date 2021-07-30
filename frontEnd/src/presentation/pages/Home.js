import React, { Component } from "react";
import Login from "../pages/autenticacion/Login"
//import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="home">
            <section>
              <div>
                <div className="container text-center py-5">
                  <h1 className="display-4">Bienvenido a Estacionamiento JDS</h1>
                  <p className="lead">
                    Debes Iniciar Sesion para Obtener acceso a todos nuestros servicios
                  </p>
                  <hr />
                  
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col-6">
          <Login/>
        </div>
      </div>
    );
  }
}

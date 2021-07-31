import React, { Component } from "react";
import Search from "./Search";
import SearchFactura from "./SearchFactura";

//import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="home">
            <section>
            <SearchFactura/>
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
          <Search/>
        </div>
      </div>
    );
  }
}
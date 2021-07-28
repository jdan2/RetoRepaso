import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../infrastructure/services/firebase/firebase";



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <h2>
        <Link to={"/"} className="text-light">
          Estacionamiento JDS
        </Link>
      </h2>
      {auth().currentUser ? (

        
        <div>
        <Link
        to={"/newticket"}
        className="btn btn-secondary nuevo-post d-block d-md-inline-block"
      >
        Agregar Tiquete
      </Link>
         
          <button
            className="btn btn-danger d-block d-md-inline-block" onClick={() => auth().signOut()}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div>
          <Link
            to={"/"}
            className="btn btn-secondary nuevo-post d-block d-md-inline-block"
          >
            Ingresar
          </Link>
          {}
          <Link
            to={"/signup"}
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
          >
            Registrate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

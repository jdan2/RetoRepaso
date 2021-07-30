import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../infrastructure/services/firebase/firebase";



const Header = () => {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to={"/newticket"}>Estacionamiento JDS</Link>

                
                {auth().currentUser ?
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary " to={"/listtickets"}>Listado Tickets</Link>
                    &nbsp;
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary " to={"/newticket"}>Generar Tickets</Link>
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary " to={"lisfacturas/ver"}>Listado facturas</Link>
                    &nbsp;
                    <Link className="nav-item nav-link mr-3 btn btn-outline-secondary " to={"/newfactura/factura/:id"}>Generar Factura</Link>

                    
                        <span className="navbar-text mr-3 btn text-primary">Sesion - {auth().currentUser.email}</span>
                        
                        <button className="nav-item nav-link mr-3 btn btn-outline-secondary" onClick={() => auth().signOut()}>Cerrar Sesion</button>
                    </div> :
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link mr-3 btn btn-outline-secondary" to={"/"}>Iniciar Sesion</Link>
                        <Link className="nav-item nav-link mr-3 btn btn-outline-secondary" to={"/signup"}>Registrarse</Link>
                    </div>}
            </div>
        </nav>
        </div>
  );
};

export default Header;

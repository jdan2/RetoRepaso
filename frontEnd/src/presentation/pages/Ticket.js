import React from "react";
import { Link, useHistory } from "react-router-dom";

//redux
import {useDispatch} from 'react-redux';
import { uuid } from "uuid";
import { onlyTicketAction } from "../../domain/actions/ticketActions";

const Ticket = ({ ticket }) => {
  
  const dispatch = useDispatch();
  const history = useHistory(); 
  const { tiqueteId, celdaId, horaIngreso, placa, tipoVehiculo } = ticket;

  const redireccionarVer = ticket =>{
      dispatch(onlyTicketAction(ticket))
      
      history.push(`/listtickets/ver/${ticket.tiqueteId}`)
  }

  const redireccionarEditar = ticket =>{
    dispatch(onlyTicketAction(ticket))
    
    history.push(`/listtickets/ver/${ticket.tiqueteId}`)
}

  return (
    <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
        <img
          src={Link}
          className="img-fluid"
        />
      </div>

      <div className="card-body">
      <h4 className="card-title">Tiquete Id: {tiqueteId}</h4>      
         <h4 className="card-title">Celda Asignada: {celdaId}</h4>
        <p className="card-text">Categoria: {tipoVehiculo}</p>
        <button 
          type="button"
          onClick={()=> redireccionarVer(ticket)}
          className="btn btn-primary text-center form-control">Ver Informacion Ticket</button>
          
      </div>
    </div>
  );
};

export default Ticket;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import img from './../img/PATIOS3.jpg'

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
    
    history.push(`/listtickets/editar/${ticket.tiqueteId}`)
}

  return (
    <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
      <img src={img} alt="logo" className="img-fluid" />
      </div>

      <div className="card-body">
           
         <h4 className="card-title">Celda Asignada: {celdaId}</h4>
        <p className="card-text">Categoria: {tipoVehiculo}</p>
        <button 
          type="button"
          onClick={()=> redireccionarVer(ticket)}
          className="btn btn-primary text-center form-control">Ver Informacion Ticket</button>

          <button 
          type="button"
          onClick={()=> redireccionarEditar(ticket)}
          className="btn btn-primary text-center form-control">Editar Ticket</button>

          
          
      </div>
      
    </div>
  );
};

export default Ticket;

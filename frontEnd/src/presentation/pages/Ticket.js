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
      
      history.push(`/listtickets/ver/${tiqueteId}`)
  }

  const redireccionarEditar = ticket =>{
    dispatch(onlyTicketAction(ticket))
    
    history.push(`/listtickets/editar/${ticket.tiqueteId}`)
}

const redireccionarFactura = ticket =>{
  dispatch(onlyTicketAction(ticket))
  
  history.push(`/newfactura/`)
}

  return (
    <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
      <img src={img} alt="logo" className="img-fluid" />
      </div>

      <div className="card-body">

      <table className="table table-sm table-bordered">
         <thead>
           <tr>
           <th>hola2</th>
           <th>hola2</th>
           <th>hola2</th> <th>hola2</th>
           </tr>
           </thead>
           <tbody>
           <tr>
        <td><h4 className="card-title">Celda Asignada: {celdaId}</h4></td> 
        <td><p className="card-text">Categoria: {tipoVehiculo}</p> </td>
       <td> <button 
          type="button"
          onClick={()=> redireccionarVer(ticket)}
          className="btn btn-primary text-center form-control">Ver Informacion Ticket</button></td>

         <td> <button 
          type="button"
          onClick={()=> redireccionarEditar(ticket)}
          className="btn btn-primary text-center form-control">Editar Ticket</button> </td>

          <button 
          type="button"
          onClick={()=> redireccionarFactura(ticket)}
          className="btn btn-primary text-center form-control">Registrar Salida</button>

          </tr>
          </tbody>
          </table>
      </div>
      
      
    </div>
  );
};

export default Ticket;

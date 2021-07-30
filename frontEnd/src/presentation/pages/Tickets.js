import React, { useEffect, useState, Fragment } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listTicketsAction,
  deleteTicketAction,
  onlyTicketAction,
  ticketEditAction
} from "../../domain/actions/ticketActions";
import Factura from "./Factura";
import Ticket from "./Ticket";


function Tickets() {

  const dispatch = useDispatch();

  useEffect(() => {
    const listTickets = () => dispatch(listTicketsAction());
    listTickets();
  }, [dispatch]);

  const deleteTicket = (tiqueteId) => {
    dispatch(deleteTicketAction(tiqueteId));
    dispatch(listTicketsAction());
  };

  const [pruebam, setpruebam] = useState([]);
  const [edit, setEdit] = useState([]);

  const ticketone = (ticket) => {
    dispatch(onlyTicketAction(ticket));
    console.log("Todo el objeto seleccionado", ticket);
    setpruebam(["Celda Asignada: ",ticket.celdaId, "Hora Ingreso: ", ticket.horaIngreso, ticket.placa]);
    setEdit([ticket.horaIngreso]);
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const ticketEdit= async (ticket) =>{
    console.log("algo");
    dispatch(await ticketEditAction(ticket.tiqueteId, ticket.tipoVehiculo, ticket.horaIngreso, ticket.celdaId,ticket.placa))
   }
   //const error = useSelector((state) => state.tickets.error);
//const cargando = useSelector((state) => state.tickets.loading);
  
  const tickets = useSelector((state) => state.ticketReducer.tickets);
  
    
  return (

    <Fragment>
    



      <div className="row">

        <h2 className="text-center my-5"> Listado de Ticketes</h2>

        {/*error ? <p className="alert-danger text-center">Hubo un error</p> : null}
  {cargando ? <p className="text-center">Cargando..</p> : null}*/}
        <div className="col-6">
          <div className="border-init">
            <div className="container text-center">

              {tickets.length === 0
                ? "No hay registros"
                
                : tickets.map((ticket) => (
                  
                  <Ticket key={ticket.id} ticket={ticket}  />
                  
                  
                  
                  
                ))}
                
                <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Celda: {ticket.celdaId}{" "}
            
            <button onClick={() => deleteTicket(ticket.tiqueteId)}>Eliminar</button>
            <button onClick={() => ticketone(ticket)}>Ver</button>
            <button onClick={() =>ticketEdit(ticket)}>Edit</button>
          </li>
        ))}
      </ul>
            </div>
            <ul>
        
      </ul>
          </div>
          {pruebam}
          <br />
          {edit}
        </div>
      </div>

      

    </Fragment>
  );
};

    {/*
    <div className="row">
        <div className="col-6">
          <div className="home">
    <div>
    <div className={"border border-radius rounded border-dark mb-3"}>
                            <div className="text-center p-3"></div>
      <h1>Lista de Tiquetes</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Celda: {ticket.celdaId}{" "}
            
            <button onClick={() => deleteTicket(ticket.id)}>Eliminar</button>
            <button onClick={() => ticketone(ticket)}>Ver</button>
            <button onClick={() =>ticketEdit(ticket)}>Edit</button>
          </li>
        ))}
      </ul>
      {tickets.map((ticket) => (
      <div className="col-6">
      <div id="verTicket">
        <h1>{ticket.placa}</h1>
         
      </div>
      
      </div>
      ))}
        </div>
        <div id="verTicket">
        <h1>{pruebam}</h1>
         
      </div>
        
    </div>
    </div>
    </div>
    </div>
    
  );
}*/}

export default Tickets;
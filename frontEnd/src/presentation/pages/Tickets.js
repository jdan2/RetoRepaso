import React, { useEffect, useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listTicketsAction,
  deleteTicketAction,
  onlyTicketAction,
  ticketEditAction
} from "../../domain/actions/ticketActions";

function Tickets() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listTickets = () => dispatch(listTicketsAction());
    listTickets();
  }, [dispatch]);

  const deleteTicket = (id) => {
    dispatch(deleteTicketAction(id));
    dispatch(listTicketsAction());
  };

  const [pruebam, setpruebam] = useState([]);

  const ticketone = (ticket) => {
    dispatch(onlyTicketAction(ticket));
    console.log("Todo el objeto seleccionado", ticket);
    setpruebam([ticket.celda, ticket.horaIngreso]);
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const ticketEdit= async (ticket) =>{
    console.log("algo");
    dispatch(await ticketEditAction(ticket.id, "P...", ticket.horaIngreso, ticket.celda,ticket.placa))
   }

  
  const tickets = useSelector((state) => state.ticketReducer.tickets);
    
  return (
    <div>
      <h1>Lista de Tiquetes</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.celda}{" "}
            <button onClick={() => deleteTicket(ticket.id)}>Eliminar</button>
            <button onClick={() => ticketone(ticket)}>Ver</button>
            <button onClick={() =>ticketEdit(ticket)}>Edit</button>
          </li>
        ))}
      </ul>
        <div id="verTicket">
          <h1>{pruebam}</h1>
        </div>
    </div>
  );
}

export default Tickets;
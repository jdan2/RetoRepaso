import {
    //ADD
    ADD_TICKET,
    ADD_TICKET_FAILURE,
    ADD_TICKET_SUCCESS,
} from '../types/ticket.js';


import clientAxios from './../../infrastructure/services/api/axios';

//Crear Acciones de ticketes
export function addNewTicketAction(ticket){
    return async (dispatch) =>{
        dispatch(addTicket())
        try {
            //Peticion a la base de datos
            await clientAxios.post('tickets',ticket);
            //ok
            dispatch(addTicketSuccess(ticket));
            alert("Se ha creado correctamente");
        } catch (error) {
            dispatch(addTicketFailure(true));
        }
    }
}

const addTicket = () =>({
    type: ADD_TICKET,
    payload: true
});

const addTicketSuccess = (ticket) =>({
    type:ADD_TICKET_SUCCESS,
    payload:ticket
});

const addTicketFailure = (error) =>({
    type:ADD_TICKET_FAILURE,
    payload:error
});

import {
    //ADD
    ADD_TICKET,
    ADD_TICKET_FAILURE,
    ADD_TICKET_SUCCESS,

    //LIST
    LIST_TICKETS,
    LIST_TICKETS_SUCCESS,
    LIST_TICKETS_FAILURE,
    //DELETE
    DELETE_TICKET,
    DELETE_TICKET_SUCCESS,
    DELETE_TICKET_FAILURE,
    //READ
    ONLY_TICKET,
    EDIT_TICKET,
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

//Listar tickets
export function listTicketsAction(){
    return async(dispatch) =>{
        dispatch(listTickets());
        try{
            //Hago mi peticion HTTP
            const response = await clientAxios.get('/listartiquetes');
            dispatch(listTicketsSuccess(response.data));

        }catch(error){
            dispatch(listTicketsFailure());
        }
    }
}

const listTickets = () =>({
    type:LIST_TICKETS,
    payload:true
})

const listTicketsSuccess = (tickets) =>({
    type:LIST_TICKETS_SUCCESS,
    payload:tickets
})

const listTicketsFailure = () =>({
    type:LIST_TICKETS_FAILURE,
    payload:true
})


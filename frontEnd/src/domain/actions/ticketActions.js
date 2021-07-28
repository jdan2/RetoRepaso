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
            await clientAxios.post('/',ticket);
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

//Eliminar empleados
export function deleteTicketAction(id){
    return async (dispatch) =>{
        dispatch(deleteTicket());
        try{
            await clientAxios.delete('/eliminartiquete/'+id);
            dispatch(deleteTicketSuccess())
            alert("Se ha eliminado correctamente");
        }catch(error){
            dispatch(deleteTicketFailure);
        }
    }
}

const deleteTicket = () =>({
    type:DELETE_TICKET,
    payload:true
})

const deleteTicketSuccess = () => ({
    type:DELETE_TICKET_SUCCESS,
    payload:'Se ha eliminado'
})

const deleteTicketFailure = () => ({
    type:DELETE_TICKET_FAILURE,
    payload:true
})

export function onlyTicketAction(ticket){
    return (dispatch) =>{
        dispatch(onlyTicket(ticket))
    }
}

const onlyTicket = ticket =>({
    type:ONLY_TICKET,
    payload:ticket
})

export const ticketEditAction =async (id,horaIngreso, placa, celdaId,tipoVehiculo) => {
    return async (dispatch) =>{
    dispatch(editTicket())
    const ticket = {horaIngreso:horaIngreso, placa:placa, celdaId:celdaId, tipoVehiculo: tipoVehiculo}
    await clientAxios.put('/tiquetes/'+id,ticket);
    }
}

const editTicket = ()=>({
    type:EDIT_TICKET,
    payload:true
});


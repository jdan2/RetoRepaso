import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';


import {
    //ADD
    ADD_TICKET,
    ADD_TICKET_FAILURE,
    ADD_TICKET_SUCCESS,

    //LIST
    LIST_TICKETS,
    LIST_CELDAS,
    LIST_CELDAS_SUCCESS,
    LIST_TICKETS_SUCCESS,
    LIST_TICKETS_FAILURE,
    LIST_CELDAS_FAILURE,
    //DELETE
    DELETE_TICKET,
    DELETE_TICKET_SUCCESS,
    DELETE_TICKET_FAILURE,
    //READ
    ONLY_TICKET,
    OBTENER_TICKET,
    EDIT_TICKET,
} from '../types/ticket.js';


import clientAxios from './../../infrastructure/services/api/axios';
import { Alert } from 'bootstrap';
import { useState } from 'react';

//Crear Acciones de ticketes
export function addNewTicketAction(ticket){
    return async (dispatch) =>{
        dispatch(addTicket())
        try {
            //Peticion a la base de datos
            await clientAxios.post('/creartiquete',ticket);
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

export function listCeldasAction(){
    return async(dispatch) =>{
        dispatch(listCeldas());
        try{
            
            //Hago mi peticion HTTP
            const response = await clientAxios.get('/listarceldas/disponibles');
            dispatch(listCeldasSuccess(response.data));
           

        }catch(error){
            dispatch(listCeldasFailure());
        }
    }
}


const listTickets = () =>({
    type:LIST_TICKETS,
    payload:true
})

const listCeldas = () =>({
    type:LIST_CELDAS,
    payload:true
})
const listCeldasSuccess = (celdas) =>({
    type:LIST_CELDAS_SUCCESS,
    payload:celdas
})

const listTicketsSuccess = (tickets) =>({
    type:LIST_TICKETS_SUCCESS,
    payload:tickets
})
const listCeldasFailure = () =>({
    type:LIST_CELDAS_FAILURE,
    payload:true
})

const listTicketsFailure = () =>({
    type:LIST_TICKETS_FAILURE,
    payload:true
})

//Eliminar 
export function deleteTicketAction(tiqueteId){
    return async (dispatch) =>{
        dispatch(deleteTicket());
        try{
            await clientAxios.delete(`/eliminartiquete?id=${tiqueteId}`);
            dispatch(deleteTicketSuccess())           
            alert("Se ha eliminado correctamente")
               
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
    payload:'Se ha eliminado',
    
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

export function obtenerTicketVer(ticket){
    return (dispatch) =>{
        dispatch( obtenerTicketVerAction(ticket) )
    }
}

const obtenerTicketVerAction = ticket =>({
    type: OBTENER_TICKET,
    payload: ticket
})

export const ticketEditAction =async (tiqueteId,horaIngreso, placa, celdaId,tipoVehiculo) => {
    return async (dispatch) =>{
    dispatch(editTicket())
    const ticket = {tiqueteId:tiqueteId, horaIngreso:horaIngreso, placa:placa, celdaId:celdaId, tipoVehiculo:tipoVehiculo}
   // await clientAxios.put(`/editartiquete?id=${tiqueteId,ticket}`);
    await clientAxios.put('/editartiquete/',tiqueteId, ticket);
    }
}

const editTicket = ()=>({
    type:EDIT_TICKET,
    payload:true
});


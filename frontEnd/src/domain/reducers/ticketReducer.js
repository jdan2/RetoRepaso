import {
    ADD_TICKET,
    ADD_TICKET_FAILURE,
    ADD_TICKET_SUCCESS,
    LIST_TICKETS,
    LIST_TICKETS_SUCCESS,
    LIST_TICKETS_FAILURE,
    LIST_CELDAS,
    LIST_CELDAS_SUCCESS,
    LIST_CELDAS_FAILURE,
    DELETE_TICKET,
    DELETE_TICKET_SUCCESS,
    DELETE_TICKET_FAILURE,
    ONLY_TICKET,
    OBTENER_TICKET,
    EDIT_TICKET
} from '../types/ticket.js';

//Creamos el estado inicial
const initialState = {
    tickets:[],
    error:null,
    loading:false,
    ticketone:null,
}

const ticketsReducer =(state=initialState, action) =>{
    switch (action.type) {
        case ADD_TICKET:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_TICKET_SUCCESS:
            return{
                ...state,
                loading:false,
                tickets: [...state.tickets, action.payload]
            }
        case ADD_TICKET_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case LIST_TICKETS:
            return{
                ...state,
                loading:action.payload
            }
        case LIST_TICKETS_SUCCESS:
            return{
                ...state,
                loading:false,
                tickets: action.payload
            }
        case LIST_TICKETS_FAILURE:
            return{
             ...state,
             loading:false,
             error: action.payload
            }
        case LIST_CELDAS:
            return{
                ...state,
                loading:action.payload
            }
        case LIST_CELDAS_SUCCESS:
            return{
                ...state,
                loading:false,
                celdas: action.payload
            }
        case LIST_CELDAS_FAILURE:
            return{
             ...state,
             loading:false,
             error: action.payload
            }
        case DELETE_TICKET:
            return{
            ...state,
            loading: true
            }
        case DELETE_TICKET_SUCCESS:
            return{
            ...state,
            loading: action.payload
            }
        case DELETE_TICKET_FAILURE:
            return{
            ...state,
            loading: false,
            error: action.payload
            }
        case ONLY_TICKET:
            return{
            ...state,
            ticketone:action.payload
            }
            case OBTENER_TICKET:
            return{
                ...state,
                ticketobtener:action.payload
            } 
        case EDIT_TICKET:
            return{
            ...state,
            loading:action.payload
            }
            default:
            return state;
    }
}
export default ticketsReducer;
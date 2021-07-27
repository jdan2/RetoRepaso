import {
    ADD_TICKET,
    ADD_TICKET_FAILURE,
    ADD_TICKET_SUCCESS,
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
            default:
            return state;
    }
}
export default ticketsReducer;
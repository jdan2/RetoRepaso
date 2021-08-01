import ticketReducer from "../domain/reducers/ticketReducer";
import {
    addNewTicketAction,
    addTicket,
    addTicketSuccess,
    addTicketFailure,


    
} from "../domain/actions/ticketActions";

describe('reducer user test functions', () => {


    const initialState = {
        tickets: {authenticated: false},
        error: {plan: false},
        loading: null,
        ticketone: ""
    };

    test('reducer LOGIN_USER case', () => {
        const action = loginUser();
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
    })

})
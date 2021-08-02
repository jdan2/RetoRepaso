import reducer from "../reducers/ticketReducer";
import {
    
    addTicket,
    addTicketSuccess,
    addTicketFailure,
    
} from "../actions/ticketActions";  


describe('reducer tickets test functions', () => {

    const dummyTicket = {
        tiqueteId: "HoPQghuxLxf",
        horaIngreso: "10:20",
        placa: "ERT569",
        celdaId: "C123",
        tipoVehiculo: "moto"
    }

    const dummyFactura = {
        facturaId: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        empleadoId: "V456",
        horaSalida: "10:30",
        canitdadMinutos: "300",
        valorTotal:"4000"
    }

   const initialState = {
        tickets:[],
        error:null,
        loading:false,
        ticketone:null,
    };

    test('reducer ADD_TICKET case', () => {
      
        const action = addTicket();
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer ADD_TICKET_SUCESS case', () => {
      
        const action = addTicketSuccess(dummyTicket);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, ticket: dummyTicket})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })
    test('reducer ADD_TICKET_FAILURE case', () => {
      
        const action = addTicketFailure("Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "Error"})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })


})


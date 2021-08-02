import reducer from "../reducers/ticketReducer";
import {
    
    addTicket,
    addTicketSuccess,
    addTicketFailure,
    listTickets,
    listTicketsSuccess,
    listTicketsFailure,
    listCeldas,
    listCeldasSuccess,
    listCeldasFailure,
    deleteTicket,
    deleteTicketSuccess,
    deleteTicketFailure,
    onlyTicket,
    editarTicket,



    
} from "../actions/ticketActions";  


describe('reducer tickets test functions', () => {

    const dummyTicket = {
        tiqueteId: "HoPQghuxLxf",
        horaIngreso: "10:20",
        placa: "ERT569",
        celdaId: "C123",
        tipoVehiculo: "moto"
    }

    const dummyCelda = {
        celdaId:"C008",
        disponibilidad: true,
        tipoCelda: "carro"
    
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

    test('reducer LIST_TICKES case', () => {
      
        const action = listTickets(dummyTicket);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer LIST_TICKES_SUCESS case', () => {
      
        const action = listTicketsSuccess(dummyTicket);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, tickets: dummyTicket})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })
    test('reducer LIST_TICKES_FAILURE case', () => {
      
        const action = listTicketsFailure("Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "Error"})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer LIST_CELDAS case', () => {
      
        const action = listCeldas(dummyCelda);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer LIST_CELDAS_SUCESS case', () => {
      
        const action = listCeldasSuccess(dummyCelda);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, celdas: dummyCelda})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })
    test('reducer LIST_CELDAS_FAILURE case', () => {
      
        const action = listCeldasFailure("Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "Error"})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer DELETE_TICKET case', () => {
      
        const action = deleteTicket(dummyTicket.tiqueteId);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer DELETE_TICKET_SUCESS case', () => {
      
        const action = deleteTicketSuccess(dummyTicket);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, tickets: dummyTicket})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })
    test('reducer DELETE_TICKET_FAILURE case', () => {
      
        const action = deleteTicketFailure("Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "Error"})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer ONLY_TICKET case', () => {
      
        const action = onlyTicket(dummyTicket);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer EDITAR_TICKET case', () => {
      
        const action = editarTicket(dummyTicket);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, ticket: dummyTicket})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })


})


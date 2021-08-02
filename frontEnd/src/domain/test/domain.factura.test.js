import reducer from "../reducers/facturaReducer";
import {
    
    addFactura,
    addFacturaSuccess,
    addFacturaFailure,
    listFacturas,
    listFacturasSuccess,
    listFacturasFailure,
    deleteFactura,
    deleteFacturaSuccess,
    deleteFacturaFailure,
    onlyFactura,
    editarFactura,



    
} from "../actions/facturaActions";

describe('reducer Facturas test functions', () => {

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
    facturas:[],
    error:null,
    loading:false,
    facturaone:null,
    };

    test('reducer ADD_FACTURA case', () => {
      
        const action = addFactura(dummyFactura);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer ADD_FACTURA_SUCESS case', () => {
      
        const action = addFacturaSuccess(dummyFactura);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, ticket: dummyTicket})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })
    test('reducer ADD_FACTURA_FAILURE case', () => {
      
        const action = addFacturaFailure("Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "Error"})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer LIST_FACTURAS case', () => {
      
        const action = listFacturas(dummyFactura);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer LIST_FACTURAS_SUCESS case', () => {
      
        const action = listFacturasSuccess(dummyFactura);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, tickets: dummyFactura})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })
    test('reducer LIST_FACTURAS_FAILURE case', () => {
      
        const action = listFacturasFailure("Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "Error"})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

   

    test('reducer DELETE_FACTURA case', () => {
      
        const action = deleteFactura(dummyFactura.facturaId);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer DELETE_FACTURA_SUCESS case', () => {
      
        const action = deleteFacturaSuccess(dummyFactura);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, facturas: dummyFactura})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })
    test('reducer DELETE_FACTURA_FAILURE case', () => {
      
        const action = deleteFacturaFailure("Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "Error"})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer ONLY_FACTURA case', () => {
      
        const action = onlyFactura(dummyFactura);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })

    test('reducer EDITAR_FACTURA case', () => {
      
        const action = editarFactura(dummyFactura);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, ticket: dummyFactura})
        
       // expect(reducer(state, action())).toEqual({"tickets":[], "error":null, "loading":true, "ticketone":null})
    })


})


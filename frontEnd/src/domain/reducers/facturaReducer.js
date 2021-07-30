import {
    ADD_FACTURA,
    ADD_FACTURA_FAILURE,
    ADD_FACTURA_SUCCESS,
    LIST_FACTURAS,
    LIST_FACTURAS_SUCCESS,
    LIST_FACTURAS_FAILURE,
    DELETE_FACTURA,
    DELETE_FACTURA_SUCCESS,
    DELETE_FACTURA_FAILURE,
    ONLY_FACTURA,
    EDIT_FACTURA
} from '../types/factura.js';

//Creamos el estado inicial
const initialState = {
    facturas:[],
    error:null,
    loading:false,
    facturaone:null,
}

const facturasReducer =(state=initialState, action) =>{
    switch (action.type) {
        case ADD_FACTURA:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_FACTURA_SUCCESS:
            return{
                ...state,
                loading:false,
                facturas: [...state.facturas, action.payload]
            }
        case ADD_FACTURA_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case LIST_FACTURAS:
            return{
                ...state,
                loading:action.payload
            }
        case LIST_FACTURAS_SUCCESS:
            return{
                ...state,
                loading:false,
                facturas: action.payload
            }
        case LIST_FACTURAS_FAILURE:
            return{
             ...state,
             loading:false,
             error: action.payload
            }
        case DELETE_FACTURA:
            return{
            ...state,
            loading: true
            }
        case DELETE_FACTURA_SUCCESS:
            return{
            ...state,
            loading: action.payload
            }
        case DELETE_FACTURA_FAILURE:
            return{
            ...state,
            loading: false,
            error: action.payload
            }
        case ONLY_FACTURA:
            return{
            ...state,
            facturaone:action.payload
            }
        case EDIT_FACTURA:
            return{
            ...state,
            loading:action.payload
            }
            default:
            return state;
    }
}
export default facturasReducer;
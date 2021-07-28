import {
    //ADD
    ADD_FACTURA,
    ADD_FACTURA_FAILURE,
    ADD_FACTURA_SUCCESS,

    //LIST
    LIST_FACTURAS,
    LIST_FACTURAS_SUCCESS,
    LIST_FACTURAS_FAILURE,
    //DELETE
    DELETE_FACTURA,
    DELETE_FACTURA_SUCCESS,
    DELETE_FACTURA_FAILURE,
    //READ
    ONLY_FACTURA,
    EDIT_FACTURA,
} from '../types/factura.js';


import clientAxios from './../../infrastructure/services/api/axios';

//Crear Acciones de factura
export function addNewFacturaAction(factura){
    return async (dispatch) =>{
        dispatch(addFactura())
        try {
            //Peticion a la base de datos
            await clientAxios.post('/crearfactura',factura);
            //ok
            dispatch(addFacturaSuccess(factura));
            alert("Se ha creado correctamente");
        } catch (error) {
            dispatch(addFacturaFailure(true));
        }
    }
}

const addFactura = () =>({
    type: ADD_FACTURA,
    payload: true
});

const addFacturaSuccess = (factura) =>({
    type:ADD_FACTURA_SUCCESS,
    payload:factura
});

const addFacturaFailure = (error) =>({
    type:ADD_FACTURA_FAILURE,
    payload:error
});

//Listar Facturas
export function listFacturasAction(){
    return async(dispatch) =>{
        dispatch(listFacturas());
        try{
            //Hago mi peticion HTTP
            const response = await clientAxios.get('/listarfacturas');
            dispatch(listFacturasSuccess(response.data));

        }catch(error){
            dispatch(listFacturasFailure());
        }
    }
}

const listFacturas = () =>({
    type:LIST_FACTURAS,
    payload:true
})

const listFacturasSuccess = (Facturas) =>({
    type:LIST_FACTURAS_SUCCESS,
    payload:Facturas
})

const listFacturasFailure = () =>({
    type:LIST_FACTURAS_FAILURE,
    payload:true
})

//Eliminar factura
export function deleteFacturaAction(id){
    return async (dispatch) =>{
        dispatch(deleteFactura());
        try{
            await clientAxios.delete('/eliminarfactura/'+id);
            dispatch(deleteFacturaSuccess())
            alert("Se ha eliminado correctamente");
        }catch(error){
            dispatch(deleteFacturaFailure);
        }
    }
}

const deleteFactura = () =>({
    type:DELETE_FACTURA,
    payload:true
})

const deleteFacturaSuccess = () => ({
    type:DELETE_FACTURA_SUCCESS,
    payload:'Se ha eliminado'
})

const deleteFacturaFailure = () => ({
    type:DELETE_FACTURA_FAILURE,
    payload:true
})

export function onlyFacturaAction(factura){
    return (dispatch) =>{
        dispatch(onlyFactura(factura))
    }
}

const onlyFactura = factura =>({
    type:ONLY_FACTURA,
    payload:factura
})

export const facturaEditAction =async (id,horaIngreso, placa, celda,tipoVehiculo) => {
    return async (dispatch) =>{
    dispatch(editFactura())
    const factura = {horaIngreso:horaIngreso, placa:placa, celda:celda, tipoVehiculo: tipoVehiculo}
    await clientAxios.put('/facturas/'+id,factura);
    }
}

const editFactura = ()=>({
    type:EDIT_FACTURA,
    payload:true
});

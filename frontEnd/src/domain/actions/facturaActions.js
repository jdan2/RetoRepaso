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
import { useState } from 'react';


import clientAxios from './../../infrastructure/services/api/axiosSpring';



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
            const response = await clientAxios.get('/obtenerfacturas');
            dispatch(listFacturasSuccess(response.data));
            console.log(response.data);

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
export function deleteFacturaAction(facturaId){
    return async (dispatch) =>{
        dispatch(deleteFactura());
        try{
            await clientAxios.delete(`/eliminarfactura/${facturaId}`);
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





export const facturaEditAction =async (facturaId, tiqueteId, empleadoId, horasalida, canitdadMinutos, valorTotal) => {
    return async (dispatch) =>{
    dispatch(editFactura())
    const factura = {facturaId:facturaId, tiqueteId:tiqueteId, empleadoId:empleadoId, horasalida:horasalida, canitdadMinutos:canitdadMinutos, valorTotal:valorTotal}
    await clientAxios.put('/actualizarfactura/',factura);
    }
}



  

/*export const peticionPut=async()=>{

   
    await clientAxios.put('/actualizarfactura', consolaSeleccionada)
    .then(response=>{
      const dataNueva=data;
      dataNueva.map(consola=>{
        if(consolaSeleccionada.facturaId===consola){
          consola.facturaId=consolaSeleccionada.facturaId;
          consola.tiqueteId.tiqueteId=consolaSeleccionada.tiqueteId.tiqueteId;
          consola.empleadoId.empleadoId=consolaSeleccionada.empleadoId.empleadoId;
          consola.horaSalida.value=consolaSeleccionada.horaSalida.value;
          consola.canitdadMinutos.value=consolaSeleccionada.canitdadMinutos.value;
          consola.valorTotal.value=consolaSeleccionada.valorTotal.value;
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
    })
  }*/

const editFactura = ()=>({
    type:EDIT_FACTURA,
    payload:true
});


 
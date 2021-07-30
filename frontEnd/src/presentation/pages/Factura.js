import React from "react";
import { Link, useHistory } from "react-router-dom";
import img from './../img/PATIOS3.jpg'

//redux
import {useDispatch} from 'react-redux';
import { uuid } from "uuid";
import { onlyFacturaAction } from "../../domain/actions/facturaActions";

const Factura = ({ factura }) => {
  
  const dispatch = useDispatch();
  const history = useHistory(); 
  const { facturaId,
    tiqueteId,
    empleadoId,
    horaSalida,
    canitdadMinutos,
    valorTotal } = factura;

  const redireccionarVer = factura =>{
      dispatch(onlyFacturaAction(factura))
      
      history.push(`/listfacturas/ver/${factura.facturaId}`)
  }

  const redireccionarEditar = factura =>{
    dispatch(onlyFacturaAction(factura))
    
    history.push(`/listfacturas/editar/${factura.facturaId}`)
}

const redireccionarFactura = factura =>{
  dispatch(onlyFacturaAction(factura))
  
  history.push(`/newfactura/factura/${factura.facturaId}`)
}

  return (
    <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
      <img src={img} alt="logo" className="img-fluid" />
      </div>

      <div className="card-body">
           
         <h4 className="card-title">Empleado responsable: {factura.empleadoId.empleadoId}</h4>
        <p className="card-text">Hora Salida: {factura.horaSalida.value}</p>
        <button 
          type="button"
          onClick={()=> redireccionarVer(factura)}
          className="btn btn-primary text-center form-control">Ver Informacion Ticket</button>

          <button 
          type="button"
          onClick={()=> redireccionarEditar(factura)}
          className="btn btn-primary text-center form-control">Editar Ticket</button>

          <button 
          type="button"
          onClick={()=> redireccionarFactura(factura)}
          className="btn btn-primary text-center form-control">Registrar Salida</button>

          
      </div>
      
    </div>
  );
};

export default Factura;
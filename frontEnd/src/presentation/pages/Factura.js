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

function imprimirS(){

    var ficha = document.getElementById(2);
	  var ventimp = window.open(' ', 'popimpr');
	  ventimp.document.write( ficha.innerHTML );
	  ventimp.document.close();
	  ventimp.print( );
	  ventimp.close();

  }

  return (
    <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
      <img src={img} alt="logo" className="img-fluid" />
      </div>

      <div className="card-body" id="3">
      <div class="card-body" id="2">
      <h5 className="card-title">Id de Factura: {factura.facturaId}</h5>
      <h5 className="card-title">Id de Tiquete: {factura.tiqueteId.tiqueteId}</h5>
         <h6 className="card-title">Empleado responsable: {factura.empleadoId.empleadoId}</h6>
         <p className="card-text">Cantidad de Minutos: {factura.canitdadMinutos.value}</p>
         <p className="card-text">Hora Salida: {factura.horaSalida.value}</p>
         <p className="card-text">Valor Total: {factura.valorTotal.value}</p>
         </div>
        <button 
          type="button"
          onClick={imprimirS}
          className="btn btn-primary text-center form-control">Imprimir Factura</button>

          

        

          
      </div>
      
    </div>
  );
};

export default Factura;
import React, { useEffect, useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listFacturasAction,
  deleteFacturaAction,
  onlyFacturaAction,
  facturaEditAction
} from "../../domain/actions/facturaActions";
import Factura from "./Factura";

function Facturas() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listFacturas = () => dispatch(listFacturasAction());
    listFacturas();
  }, [dispatch]);

  const deleteFactura = (facturaId) => {
    dispatch(deleteFacturaAction(facturaId));
    dispatch(listFacturasAction());
  };

  const [pruebam, setpruebam] = useState([]);

  const facturaone = (factura) => {
    dispatch(onlyFacturaAction(factura));
    console.log("Todo el objeto seleccionado", factura);
    setpruebam([factura.horaSalida.value, factura.valorTotal.value]);
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const facturaEdit= async (factura) =>{
    console.log("algo");
    dispatch(await facturaEditAction(factura.id, factura.tiqueteId, factura.horaSalida, factura.cantidadMinutos,factura.valorTotal))
   }

  
  const facturas = useSelector((state) => state.facturaReducer.facturas);
    
  return (
    <div>
      <h1>Lista de Facturas</h1>
      <ul>

        <div>
       {facturas.length === 0
          ? "No hay registros"
          
          : facturas.map((factura) => (
            
            <Factura key={factura.id} factura={factura}  />
            
            
            
          ))}
          

        </div>

        <div className="col-6">
          <div className="border-init">
            <div className="container text-center"></div>
        <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
      {/*<img src={img} alt="logo" className="img-fluid" />*/}
      </div>

        {facturas.map((factura) => (
          <li key={factura.id}>
            {factura.facturaId}{" "}
            {factura.empleadoId.empleadoId}{" "}
            <button onClick={() => deleteFactura(factura.facturaId)}>Eliminar</button>
            <button onClick={() => facturaone(factura)}>Ver</button>
            <button onClick={() =>facturaEdit(factura)}>Edit</button>
          </li>
        ))}

        </div>
        </div>
        </div>
      </ul>
      
        <div id="verFactura">
          <h1>{pruebam}</h1>
        </div>
        
    </div>

    
  );
}

export default Facturas;
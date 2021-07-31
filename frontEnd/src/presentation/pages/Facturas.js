
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
import Modale from "./Modal";
import Search from "./Search";

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
    <div className="container">
    <div className="row" text-center>
      <h1 className="text-center">Lista de Facturas</h1>
      
      
      <Modale/>

       {/* <div>
       {facturas.length === 0
          ? "No hay registros"
          
          : facturas.map((factura) => (
            
            <Factura key={factura.id} factura={factura}  />           
                                    
          ))}
          

          </div>*/}

       
      {/*<img src={img} alt="logo" className="img-fluid" />*/}
      

    {/*    {facturas.map((factura) => (
          <li key={factura.id}>
            {factura.facturaId}{" "}
            {factura.empleadoId.empleadoId}{" "}
            <button onClick={() => deleteFactura(factura.facturaId)}>Eliminar</button>
            <button onClick={() => facturaone(factura)}>Ver</button>
            <button onClick={() =>facturaEdit(factura)}>Edit</button>
          </li>
        ))}
    */}

        
      
        
        </div>
        </div>
    
  
    
  );
}

export default Facturas;
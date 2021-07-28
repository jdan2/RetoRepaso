import React, { useEffect, useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listFacturasAction,
  deleteFacturaAction,
  onlyFacturaAction,
  facturaEditAction
} from "../../domain/actions/facturaActions";

function Facturas() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listFacturas = () => dispatch(listFacturasAction());
    listFacturas();
  }, [dispatch]);

  const deleteFactura = (id) => {
    dispatch(deleteFacturaAction(id));
    dispatch(listFacturasAction());
  };

  const [pruebam, setpruebam] = useState([]);

  const facturaone = (factura) => {
    dispatch(onlyFacturaAction(factura));
    console.log("Todo el objeto seleccionado", factura);
    setpruebam([factura.horaSalida, factura.valorTotal]);
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const facturaEdit= async (factura) =>{
    console.log("algo");
    dispatch(await facturaEditAction(factura.id, "P...", factura.horaSalida, factura.cantidadMinutos,factura.valorTotal))
   }

  
  const facturas = useSelector((state) => state.facturaReducer.facturas);
    
  return (
    <div>
      <h1>Lista de Facturas</h1>
      <ul>
        {facturas.map((factura) => (
          <li key={factura.id}>
            {factura.empleadoId}{" "}
            <button onClick={() => deleteFactura(factura.id)}>Eliminar</button>
            <button onClick={() => facturaone(factura)}>Ver</button>
            <button onClick={() =>facturaEdit(factura)}>Edit</button>
          </li>
        ))}
      </ul>
        <div id="verFactura">
          <h1>{pruebam}</h1>
        </div>
    </div>
  );
}

export default Facturas;
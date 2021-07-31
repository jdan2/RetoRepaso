import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  listFacturasAction,
  deleteFacturaAction,
  onlyFacturaAction,
  facturaEditAction
} from "../../domain/actions/facturaActions";



function SearchFactura() {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get("https://glacial-everglades-61490.herokuapp.com/api/obtenerfacturas")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.facturaId.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.tiqueteId.tiqueteId.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

const dispatch = useDispatch();

  useEffect(() => {
    const listTickets = () => dispatch(listFacturasAction());
    listTickets();
  }, [dispatch]);

  const deleteTicket = (facturaId) => {
    dispatch(deleteFacturaAction(facturaId));
    dispatch(listFacturasAction());
  };

  const [pruebam, setpruebam] = useState([]);
  const [edit, setEdit] = useState([]);

  const ticketone = (ticket) => {
    dispatch(onlyFacturaAction(ticket));
    console.log("Todo el objeto seleccionado", ticket);
    setpruebam(["Celda Asignada: ",ticket.facturaId, "Hora Ingreso: ", ticket.tiqueteId.tiqueteId]);
    
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const ticketEdit= async (ticket) =>{
    console.log("algo");
    dispatch(await facturaEditAction(ticket.tiqueteId.tiqueteId, ticket.facturaId, ticket.empleadoId.empleadoId, ticket.horaSalida.value,ticket.valorTotal.value))
   }
   //const error = useSelector((state) => state.tickets.error);
//const cargando = useSelector((state) => state.tickets.loading);
  
  const tickets = useSelector((state) => state.facturaReducer.tickets);

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />
        <button className="btn btn-success">
   
        </button>
      </div>

     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th>ID</th>
             <th>Nombre</th>
             <th>Teléfono</th>
             <th>Nombre de Usuario</th>
             <th>Correo</th>
             <th>Sitio Web</th>
             <th>Ciudad</th>
             <th>Empresa</th>
           </tr>
         </thead>

         <tbody>
           {usuarios && 
           usuarios.map((usuario)=>(
             <tr key={usuario.id}>
             <td>{usuario.tiqueteId.tiqueteId}</td>
             <td>{usuario.facturaId}</td>
             <td>{usuario.horaSalida.value}</td>
             
             <button onClick={() => deleteTicket(usuario.tiqueteId)}>Eliminar</button>
            <button onClick={() => ticketone(usuario)}>Ver</button>
            <button onClick={() =>ticketEdit(usuario)}>Edit</button>
            <td><button>Imprimir</button></td>
             
               
             </tr>
            

           ))}
           {pruebam}
         </tbody>

       </table>

     </div>
    </div>
  );
}

export default SearchFactura;
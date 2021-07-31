import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  listTicketsAction,
  deleteTicketAction,
  onlyTicketAction,
  ticketEditAction
} from "../../domain/actions/ticketActions";



function Search() {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get("https://app-parqueadero-nodejs.herokuapp.com/listartiquetes")
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
    if(elemento.tiqueteId.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.tipoVehiculo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
    const listTickets = () => dispatch(listTicketsAction());
    listTickets();
  }, [dispatch]);

  const deleteTicket = (tiqueteId) => {
    dispatch(deleteTicketAction(tiqueteId));
    dispatch(listTicketsAction());
  };

  const [pruebam, setpruebam] = useState([]);
  const [edit, setEdit] = useState([]);

  const ticketone = (ticket) => {
    dispatch(onlyTicketAction(ticket));
    console.log("Todo el objeto seleccionado", ticket);
    setpruebam(["Celda Asignada: ",ticket.celdaId, "Hora Ingreso: ", ticket.horaIngreso, ticket.placa]);
    setEdit([ticket.horaIngreso]);
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const ticketEdit= async (ticket) =>{
    console.log("algo");
    dispatch(await ticketEditAction(ticket.tiqueteId, ticket.tipoVehiculo, ticket.horaIngreso, ticket.celdaId,ticket.placa))
   }
   //const error = useSelector((state) => state.tickets.error);
//const cargando = useSelector((state) => state.tickets.loading);
  
  const tickets = useSelector((state) => state.ticketReducer.tickets);

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
             <th>ID Tiquete</th>
             <th>Id de Celda</th>
             <th>Categoria</th>
             <th>Placa</th>
             <th>Hora Ingreso</th>
             <th></th>
             
           </tr>
         </thead>

         <tbody>
           {usuarios && 
           usuarios.map((usuario)=>(
             <tr key={usuario.id}>
             <td>{usuario.tiqueteId}</td>
             <td>{usuario.celdaId}</td>
             <td>{usuario.tipoVehiculo}</td>
             <td>{usuario.placa}</td>
             <td>{usuario.horaIngreso}</td>
             
            { /*<button onClick={() => deleteTicket(usuario.tiqueteId)}>Eliminar</button>
            <button onClick={() => ticketone(usuario)}>Ver</button>
           <button onClick={() =>ticketEdit(usuario)}>Edit</button>*/}
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

export default Search;
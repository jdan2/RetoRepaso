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
import { Link } from 'react-router-dom';



function Search() {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

/*const peticionGet=async()=>{
  await axios.get("https://app-parqueadero-nodejs.herokuapp.com/listartiquetes")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}*/

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((ticket)=>{
    if(ticket.tiqueteId.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || ticket.tipoVehiculo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return ticket;
    }
  });
  setUsuarios(resultadosBusqueda);
}



const dispatch = useDispatch();

  useEffect(() => {
    const listTickets = () => dispatch(listTicketsAction());
    listTickets();
  }, [dispatch]);

  
  

  const deleteTicket = (tiqueteId) => {
    dispatch(deleteTicketAction(tiqueteId));
    dispatch(listTicketsAction());
  };

  const [tiqueteId, setTiqueteId] = useState([]);
  const [celdaId, setCeldaId] = useState([]);
  const [placa, setPlaca] = useState([]);
  const [tipoVehiculo, setTipoVehiculo]= useState([]);
  const [horaIngreso, setHoraIngreso] = useState([]);

  const ticketone = (ticket) => {
    dispatch(onlyTicketAction(ticket));
    console.log("tiquete", ticket);
    setCeldaId([ticket.celdaId]);
    setTiqueteId([ticket.tiqueteId]);
    setPlaca([ticket.placa]);
    setTipoVehiculo([ticket.tipoVehiculo]);
    setHoraIngreso([ticket.horaIngreso]);
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const ticketEdit= async (ticket) =>{
    console.log("algo");
    dispatch(await ticketEditAction(ticket.tiqueteId, ticket.tipoVehiculo, ticket.horaIngreso, ticket.celdaId,ticket.placa))
   }
   //const error = useSelector((state) => state.tickets.error);
//const cargando = useSelector((state) => state.tickets.loading);
  
  const tickets = useSelector((state) => state.ticketReducer.tickets);

  function imprimirS(){

    var ficha = document.getElementById(2);
	  var ventimp = window.open(' ', 'popimpr');
	  ventimp.document.write( ficha.innerHTML );
	  ventimp.document.close();
	  ventimp.print( );
	  ventimp.close();
     

  }

  

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Coincidencia Tiquetes"
          onChange={handleChange}
        />
        

        
      </div>
      <br />
      <div id="2">
      <form action="">
      <div class="container text-center card">
  <h2>EstacionamientoJDS</h2>
  <h4>Ingreso</h4>
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading">Id Tiquete</div>
      <div class="panel-body">{tiqueteId}</div>
    </div>

    <div class="panel panel-primary">
      <div class="panel-heading">Id de Celda</div>
      <div class="panel-body">{celdaId}</div>
    </div>

    <div class="panel panel-success">
      <div class="panel-heading">Categoria</div>
      <div class="panel-body">{tipoVehiculo}</div>
    </div>

    <div class="panel panel-info">
      <div class="panel-heading">Placa</div>
      <div class="panel-body">{placa}</div>
    </div>

    <div class="panel panel-warning">
      <div class="panel-heading">HoraIngreso</div>
      <div class="panel-body">{horaIngreso}</div>
    </div>

    
  </div>
  </div>


      </form>

     
       </div>
     
      <Link className="nav-item nav-link mr-3 btn btn-dark text-white btn-outline-secondary "  to={"/newfactura"}>Generar Factura</Link>
      <Link className="nav-item nav-link mr-3 btn btn-info text-dark btn btn-outline-primary "  onClick={()=> imprimirS()}>Imprimir Tiquete</Link>
      
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
           {tickets && 
           tickets.map((usuario)=>(
               
             <tr key={usuario.id} >
             <td>{usuario.tiqueteId}</td>
             <td>{usuario.celdaId}</td>
             <td>{usuario.tipoVehiculo}</td>
             <td>{usuario.placa}</td>
             <td>{usuario.horaIngreso}</td>
             
            { /*<button onClick={() => deleteTicket(usuario.tiqueteId)}>Eliminar</button>
            <button onClick={() => ticketone(usuario)}>Ver</button>
           <button onClick={() =>ticketEdit(usuario)}>Edit</button>*/}
           <button onClick={() => ticketone(usuario)}>Ver</button>
             
               
             </tr>
            

           ))}
           
         </tbody>
         

       </table>
       

       

     </div>
    </div>
  );
}

export default Search;
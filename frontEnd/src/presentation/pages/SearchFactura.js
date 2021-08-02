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
import { Link } from 'react-router-dom';



function SearchFactura() {


  const [facturaId, setFacturaId] = useState('');
  const [tiqueteId,  setTiqueteId] = useState('');
  const [empleadoId, setEmpleadoId] = useState('');
  const [horaSalida, setHoraSalida] = useState('');
  const [canitdadMinutos, setCantidadMinutos] = useState('');
  const [valorTotal, setValorTotal] = useState('');

  

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
    setFacturaId([ticket.facturaId]);
    setTiqueteId([ticket.tiqueteId.tiqueteId]);
    setEmpleadoId([ticket.empleadoId.empleadoId]);
    setHoraSalida([ticket.horaSalida.value]);
    setCantidadMinutos([ticket.canitdadMinutos.value]);
    setValorTotal([ticket.valorTotal.value]);
    
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const ticketEdit= async (ticket) =>{
    console.log("algo");
    dispatch(await facturaEditAction(ticket.tiqueteId.tiqueteId, ticket.facturaId, ticket.empleadoId.empleadoId, ticket.horaSalida.value,ticket.valorTotal.value))
   }
   //const error = useSelector((state) => state.tickets.error);
//const cargando = useSelector((state) => state.tickets.loading);
  
  const tickets = useSelector((state) => state.facturaReducer.tickets);

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
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />

        
      </div>
      <div id="2">
      <form action="">
      <div class="container text-center card">
  <h2>EstacionamientoJDS</h2>
  <h4>Salida</h4>
  <div class="panel-group">
    <div class="panel panel-default">

    <div class="panel panel-primary">
      <div class="panel-heading">Id de Factura</div>
      <div class="panel-body">{facturaId}</div>
    </div>
      <div class="panel-heading">Id Tiquete</div>
      <div class="panel-body">{tiqueteId}</div>
    </div>
    <div class="panel panel-success">
      <div class="panel-heading">Id Empleado</div>
      <div class="panel-body">{empleadoId}</div>
    </div> 
    
    <div class="panel panel-info">
      <div class="panel-heading">Hora Salida</div>
      <div class="panel-body">{horaSalida}</div>
    </div>

    <div class="panel panel-success">
      <div class="panel-heading">Tiempo</div>
      <div class="panel-body">{canitdadMinutos}</div>
    </div>

  
    <div class="panel panel-warning">
      <div class="panel-heading">Valor Total</div>
      <div class="panel-body">{valorTotal}</div>
    </div>

    
  </div>
  </div>


      </form>

     
       </div>
     
      
      <Link className="nav-item nav-link mr-3 btn btn-info text-dark btn btn-outline-primary "  onClick={()=> imprimirS()}>Imprimir Factura</Link>
      
      <br />

     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th>ID de Factura</th>
             <th>Id de Tiquete</th>
             <th>Id de Empleado</th>
             <th>Hora de Salida</th>
             <th>Tiempo</th>
             <th>Valor Total</th>
             <th></th>
             
           </tr>
         </thead>

         <tbody>
           {usuarios && 
           usuarios.map((usuario)=>(
             <tr key={usuario.id}>
             <td>{usuario.facturaId}</td>
             <td>{usuario.tiqueteId.tiqueteId}</td>
             <td>{usuario.empleadoId.empleadoId}</td>             
             <td>{usuario.horaSalida.value}</td>
             <td>{usuario.canitdadMinutos.value}</td>
             <td>{usuario.valorTotal.value}</td>
             
            {/* <button onClick={() => deleteTicket(usuario.tiqueteId)}>Eliminar</button>
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

export default SearchFactura;
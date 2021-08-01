import React, { useEffect, useState, Fragment } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listTicketsAction,
  deleteTicketAction,
  onlyTicketAction,
  ticketEditAction
} from "../../domain/actions/ticketActions";
import Factura from "./Factura";
import Ticket from "./Ticket";

import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));


function Tickets() {

  const dispatch = useDispatch();

  useEffect(() => {
    const listTickets = () => dispatch(listTicketsAction());
    listTickets();
  }, [dispatch]);

  const deleteTicket = (tiqueteId) => {
    dispatch(deleteTicketAction(tiqueteId));
    dispatch(listTicketsAction());
  };


  const styles= useStyles();
  const [data, setData]=useState([]);
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [modalEliminar, setModalEliminar]=useState(false);

  const [consolaSeleccionada, setConsolaSeleccionada]=useState({
    
    
    tiqueteId:'',
    celdaId:'',
    tipoVehiculo: '',
    placa: '',
    horaIngreso: ''
  })
  const handleChange=e=>{
    const {name, value}=e.target;
    setConsolaSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(consolaSeleccionada);
  }

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
  
  function imprimirS(){

    var ficha = document.getElementById(2);
	  var ventimp = window.open(' ', 'popimpr');
	  ventimp.document.write( ficha.innerHTML );
	  ventimp.document.close();
	  ventimp.print( );
	  ventimp.close();

  }


  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarConsola=(consola, caso)=>{
    setConsolaSeleccionada(consola);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

  useEffect(async()=>{
    await listTicketsAction();
  },[])


  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Ticket</h3>
      <TextField name="tiqueteId" className={styles.inputMaterial} label="Id de Tiquete" onChange={handleChange} value={consolaSeleccionada.tiqueteId && consolaSeleccionada.tiqueteId}/>
      <br />
      <TextField name="celdaId" className={styles.inputMaterial} label="Id de Celda" onChange={handleChange} value={consolaSeleccionada.celdaId && consolaSeleccionada.celdaId}/>
      <br />
      <TextField name="placa" className={styles.inputMaterial} label="Placa" onChange={handleChange} value={consolaSeleccionada.placa && consolaSeleccionada.placa}/>
      <br />
      <TextField name="horaIngreso" className={styles.inputMaterial} label="Hora de Ingreso" onChange={handleChange} value={consolaSeleccionada.horaIngreso && consolaSeleccionada.horaIngreso}/>
      <br />
      <TextField name="tipoVehiculo" className={styles.inputMaterial} label="tipoVehiculo" onChange={handleChange} value={consolaSeleccionada.tipoVehiculo && consolaSeleccionada.tipoVehiculo}/>
      <br />
      
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>ticketEdit(consolaSeleccionada.tiqueteId, consolaSeleccionada)}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el tiquete <b>{consolaSeleccionada && consolaSeleccionada.tiqueteId}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>deleteTicket(consolaSeleccionada.tiqueteId)} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )
    
  return (

    <Fragment>
    



      <div className="row">

        <h2 className="text-center my-5"> Listado de Ticketes</h2>

        {/*error ? <p className="alert-danger text-center">Hubo un error</p> : null}
  {cargando ? <p className="text-center">Cargando..</p> : null}*/}
      {/* <div className="col-6">
          <div className="border-init">
            <div className="container text-center">

            <table className="table table-sm table-bordered">
         <thead>
           <tr>
           <th>hola</th>
           <th>hola</th>
           <th>hola</th>
           </tr>
           </thead>
           <tbody>
              {tickets.length === 0
                ? "No hay registros"
                
                : tickets.map((ticket) => (
                  
                 <tr><Ticket  key={ticket.id} ticket={ticket}  /></tr> 
                  
                  
                  
                  
                ))}
                </tbody>
                </table>
                

      
            </div>
            <ul>
        
      </ul>
                </div>
          {pruebam}
          imprmi
          <br />
          {edit}
        </div>
      </div> */}
      

      
      
      
       
       
       
       
       
      

    {/*  <table className="table table-sm table-bordered">
         <thead>
           <tr>
           <th>Id del tiquete</th>
           
           <th>Celda Asignada</th>
           <th>Placa Vehiculo</th>
           <th>Acciones</th>
           </tr>
           </thead>
           <tbody>
           

        {tickets.map((ticket) => (
          <tr key={ticket.id}>
         <td>  Tiquete: {ticket.tiqueteId}{" "}</td> 
        
         <td>  Celda: {ticket.celdaId}{" "}</td> 
         <td>  Placa: {ticket.placa}{" "}</td> 
            
            <button onClick={() => deleteTicket(ticket.tiqueteId)}>Eliminar</button>
            <button onClick={() => ticketone(ticket)}>Ver</button>
            <button onClick={() =>ticketEdit(ticket)}>Edit</button>
          </tr>
          
        ))}
        
        </tbody>
                </table>
                <div id="verTicket">
        <h1>{pruebam}</h1>
         
      </div>
                </div>

                <div>
                joder

                <div className="App">
      <br />
        <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button> */}
      <br /><br />
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
             
             <TableCell>Id Tiquete</TableCell>
             <TableCell>Id de Celda</TableCell>
             <TableCell>Hora Ingreso</TableCell>
             <TableCell>Placa Vehiculo</TableCell>
             <TableCell>Categoria</TableCell>
             <TableCell>Acciones</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>

         
          
           {tickets.map((ticket) => (
             <TableRow key={ticket.id}>
               <TableCell>{ticket.tiqueteId}</TableCell>
               <TableCell>{ticket.celdaId}</TableCell>
               <TableCell>{ticket.horaIngreso}</TableCell>
               <TableCell>{ticket.placa}</TableCell>
               <TableCell>{ticket.tipoVehiculo}</TableCell>
               
               
               <TableCell>
                 <Edit className={styles.iconos} onClick={()=>seleccionarConsola(ticket, 'Editar')}/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete  className={styles.iconos} onClick={()=>seleccionarConsola(ticket, 'Eliminar')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     
    

     <Modal
     open={modalEditar}
     onClose={abrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>

     <Modal
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>
    </div>


                
                

    </Fragment>
  );
};

    {/*
    <div className="row">
        <div className="col-6">
          <div className="home">
    <div>
    <div className={"border border-radius rounded border-dark mb-3"}>
                            <div className="text-center p-3"></div>
      <h1>Lista de Tiquetes</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Celda: {ticket.celdaId}{" "}
            
            <button onClick={() => deleteTicket(ticket.id)}>Eliminar</button>
            <button onClick={() => ticketone(ticket)}>Ver</button>
            <button onClick={() =>ticketEdit(ticket)}>Edit</button>
          </li>
        ))}
      </ul>
      {tickets.map((ticket) => (
      <div className="col-6">
      <div id="verTicket">
        <h1>{ticket.placa}</h1>
         
      </div>
      
      </div>
      ))}
        </div>
        <div id="verTicket">
        <h1>{pruebam}</h1>
         
      </div>
        
    </div>
    </div>
    </div>
    </div>
    
  );
}*/}









export default Tickets;
import './App.css';
import {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  listCeldasAction
  
} from "../../domain/actions/ticketActions";
import { Link } from 'react-router-dom';



function Celda() {

  

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
    const listCeldas = () => dispatch(listCeldasAction());
    listCeldas();
  }, [dispatch]);

  
  

 

  

  
   
   
  
  const celdas = useSelector((state) => state.ticketReducer.celdas);

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
      
      
     <div className="table-responsive">
     
    
       <table className="table table-sm table-bordered">
       
       
       
       
         <thead>
           <tr>
             
             <th>Id de Celda</th>
             <th>Categoria</th>
             <th>Disponible</th>
             
             <th></th>
             
           </tr>
         </thead>

         <tbody>
           {celdas && 
           celdas.map((usuario)=>(
               
             <tr key={usuario.id} >
             <td>{usuario.celdaId}</td>
             <td>{usuario.tipoCelda}</td>
             <td>{usuario.disponibilidad}</td>
            
             
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

export default Celda;
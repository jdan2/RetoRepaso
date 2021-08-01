import './App.css';
import {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  listCeldasAction
  
} from "../../domain/actions/ticketActions";
import { Link } from 'react-router-dom';

function Celda() {


const dispatch = useDispatch();

  useEffect(() => {
    const listCeldas = () => dispatch(listCeldasAction());
    listCeldas();
  }, [dispatch]);
    
  
  const tickets = useSelector((state) => state.ticketReducer.tickets);

    

  

  return (
    <div className="App">
      <div className="containerInput">
        
        

        
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
           {tickets && 
           tickets.map((usuario)=>(
               
             <tr key={usuario.id} >
             <td>{usuario.celdaId}</td>
             <td>{usuario.tipoCelda}</td>
             <td>{usuario.disponibilidad}</td>
            
             
            { /*<button onClick={() => deleteTicket(usuario.tiqueteId)}>Eliminar</button>
            <button onClick={() => ticketone(usuario)}>Ver</button>
           <button onClick={() =>ticketEdit(usuario)}>Edit</button>
           <button onClick={() => ticketone(usuario)}>Ver</button>*/}
             
               
             </tr>
            

           ))}
           
         </tbody>

         <select name="prueba" id="">
         {
            tickets.map((usuario)=>(
             
             <option key={usuario.id} value={usuario.disponibilidad}>{usuario.celdaId}</option>
            ))}
         
         </select>
         

       </table>
       

       

     </div>
    </div>
  );
}

export default Celda;
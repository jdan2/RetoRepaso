import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//Acciones de redux
import {addNewTicketAction} from '../../domain/actions/ticketActions'; 

const NewTicket = ({ history }) =>{

    //Datos de mi formulario
    const [tiqueteId, setId] = useState('');
    const [horaIngreso, setHoraIngreso] = useState('');
    const [placa, setPlaca] = useState('');
    const [celdaId, setCeldaId] = useState('');
    const [tipoVehiculo, setTipoVehiculo] = useState('');

    //Temporalmente con useDispatch y useSelector
    const dispatch = useDispatch();

    //Crear la accion para disparar la funcion
    const addTicket = (ticket) => dispatch(addNewTicketAction(ticket));

    const submitAddTicket = e =>{
        //Prevengo que se recargue la pagina
        e.preventDefault();
        
        //Algunas validaciones del formulario

        //Ejecutar accion del nuevo elemento
        addTicket({
            tiqueteId,
            celdaId,
            tipoVehiculo,
            placa,
            horaIngreso
            
            
            
        })   
        
        history.push("/listtickets");
    }

    return(

        <div className="row justify-content-center text-center">
      <div className="col-md-8">
        <div className="card"></div>
        <div className="submit-form"></div>
    <div>
        <h2>Agregar Ticket</h2>
        <form onSubmit={submitAddTicket}>
        <div className="form-group">
            Id
            <br />
            <input 
                type="text"
                name="tiqueteId"
                required="required"
                minLength="4"
                maxLength="20"
                value={tiqueteId}
                onChange={e => setId(e.target.value)}    
            />
            </div>
            <div className="form-group">
            Hora de Ingreso
            <br />
             <input 
                type="datetime-local"
                name="horaIngreso"
                value={horaIngreso}
                onChange={e => setHoraIngreso(e.target.value)}    
            />
            </div>
            <div className="form-group">
            Placa
            <br />
             <input 
                type="text"
                name="placa"
                value={placa}
                onChange={e => setPlaca(e.target.value)}    
            />
            </div>
            <div className="form-group">
            Celda
            <br />
             <input 
                type="text"
                name="celdaId"
                value={celdaId}
                onChange={e => setCeldaId(e.target.value)}    
            />
            </div>
            <div className="form-group">
            Tipo de Vehiculo
            <br />
             <input 
                type="text"
                name="tipoVehiculo"
                value={tipoVehiculo}
                onChange={e => setTipoVehiculo(e.target.value)}    
            />

            </div>
            <button type="submit"> Agregar</button>
            
        </form>
        
    </div>
    

    </div>
    </div>
    
    
    
    )
}

export default NewTicket;
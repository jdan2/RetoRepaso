import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//Acciones de redux
import {addNewTicketAction} from '../../domain/actions/ticketActions'; 

const NewTicket = () =>{

    //Datos de mi formulario
    const [id, setId] = useState('');
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
            id,
            celdaId,
            tipoVehiculo,
            placa,
            horaIngreso
            
            
            
        })        
    }

    return(

        <div className="container text-center">
        <div className="row">
            <div className="col-md-3"/>
            <div className="col-md-6">
                <div className="card my-5">
                    <div className="card-body">
    <div>
        <h2>Agregar Ticket</h2>
        <form onSubmit={submitAddTicket}>
            Id
            <input 
                type="text"
                name="id"
                value={id}
                onChange={e => setId(e.target.value)}    
            />
            Hora de Ingreso
             <input 
                type="datetime-local"
                name="horaIngreso"
                value={horaIngreso}
                onChange={e => setHoraIngreso(e.target.value)}    
            />
            Placa
             <input 
                type="text"
                name="placa"
                value={placa}
                onChange={e => setPlaca(e.target.value)}    
            />
            Celda
             <input 
                type="text"
                name="celdaId"
                value={celdaId}
                onChange={e => setCeldaId(e.target.value)}    
            />
            Tipo de Vehiculo
             <input 
                type="text"
                name="tipoVehiculo"
                value={tipoVehiculo}
                onChange={e => setTipoVehiculo(e.target.value)}    
            />
            <button type="submit"> Agregar</button>
        </form>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default NewTicket;
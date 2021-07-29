import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//Acciones de redux
import {addNewFacturaAction} from '../../domain/actions/facturaActions'; 
import { auth } from '../../infrastructure/services/firebase/firebase';

const NewFactura = () =>{

    const ticket = useSelector(
        (state) => state.ticketReducer.ticketone
      );

      const { celdaId, tipoVehiculo, placa, horaIngreso, tiqueteId} =
  ticket;
  console.log(ticket);

    //Datos de mi formulario
    const [id, setId] = useState('');
    const [empleadoId, setEmpleadoId] = useState('');
    const [horaSalida, setHoraSalida] = useState('');
    const [cantidadMinutos, setCantidadMinutos] = useState('');
    const [valorTotal, setValorTotal] = useState('');

    //Temporalmente con useDispatch y useSelector
    const dispatch = useDispatch();

    //Crear la accion para disparar la funcion
    const addFactura = (factura) => dispatch(addNewFacturaAction(factura));

    const submitAddFactura = e =>{
        //Prevengo que se recargue la pagina
        e.preventDefault();
        
        //Algunas validaciones del formulario

        //Ejecutar accion del nuevo elemento
        addFactura({
            id,
            empleadoId,
            horaSalida,
            cantidadMinutos,
            valorTotal
            
            
            
        })        
    }

    return(
    <div>
        <h2>Agregar Factura</h2>
        <form onSubmit={submitAddFactura}>
            Id Factura
            <input 
                type="text"
                name="id"
                value={id}
                onChange={e => setId(e.target.value)}    
            />
            Id Tiquete
            <input 
                type="text"
                name="tiqueteId"
                value={tiqueteId}
                disabled   
            />
            Celda Asignada
            <input 
                type="text"
                name="celdaId"
                value={celdaId}
                disabled   
            />

            Placa Vehiculo
            <input 
                type="text"
                name="placa"
                value={placa}
                disabled   
            />
            Id del empleado
             <input 
                type="text"
                name="empleadoId"
                value={auth().currentUser.email}
                  
                disabled 
            />

            Tipo de Vehiculo
             <input 
                type="text"
                name="tipoVehiculo"
                value={tipoVehiculo}
                 
                disabled 
            />
            Hora de Ingreso
             <input 
                type="text"
                name="horaIngreso"
                value={horaIngreso}
                disabled
                    
            />
            Hora de Salida
             <input 
                type="text"
                name="horaSalida"
                value={horaSalida}
                onChange={e => setHoraSalida(e.target.value)}    
            />
            Cantidad de Minutos
             <input 
                type="text"
                name="cantidadMinutos"
                value={cantidadMinutos}
                onChange={e => setCantidadMinutos(e.target.value)}    
            />
            Valor Total
             <input 
                type="text"
                name="valorTotal"
                value={valorTotal}
                onChange={e => setValorTotal(e.target.value)}    
            />
            <button type="submit"> Agregar</button>
        </form>
    </div>
    )
}

export default NewFactura;
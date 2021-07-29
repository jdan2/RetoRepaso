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
    const [facturaId, setfacturaId] = useState('');
    const [empleadoId, setEmpleadoId] = useState('');
    const [horaSalida, setHoraSalida] = useState('');
    const [canitdadMinutos, setCantidadMinutos] = useState('');
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
            facturaId,
            tiqueteId,
            empleadoId,
            horaSalida,
            canitdadMinutos,
            valorTotal
            
            
            
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
        <h2>Agregar Factura</h2>
        <form onSubmit={submitAddFactura}>
            Id Factura
            <input 
                type="text"
                name="factureaId"
                value={facturaId}
                onChange={e => setfacturaId(e.target.value)}    
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
                type="datetime-local"
                name="horaSalida"
                value={horaSalida}
                onChange={e => setHoraSalida(e.target.value)}    
            />

           
            Cantidad de Minutos
             <input 
                type="text"
                name="canitdadMinutos"
                value={canitdadMinutos}
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
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default NewFactura;
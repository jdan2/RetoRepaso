import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//Acciones de redux
import {addNewFacturaAction} from '../../domain/actions/facturaActions'; 
import { auth } from '../../infrastructure/services/firebase/firebase';

const NewFactura = ({ history }) =>{

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
    const [submitted, setSubmitted] = useState(false);

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
        history.push("/lisfacturas");    
    }

    return(
        <div className="row justify-content-center text-center">
      <div className="col-md-8">
        <div className="card"></div>
        <div className="submit-form"></div>
        {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={submitAddFactura}>
                Agregar Otra Factura
              </button>
            </div>) : (


        
    <div className="container justify-text-center">
        <h2>Agregar Factura</h2>
        <form onSubmit={submitAddFactura}>
        <div className="form-group">
           <label htmlFor="Id Factura">Id Factura</label> 
           
            <input 
                type="text"
                
                name="factureaId"
                required="required"
                minLength={4}
                maxLength={50}
                value={facturaId}
                onChange={e => setfacturaId(e.target.value)}    
            />
            </div>
            <div className="form-group">
            Id Tiquete
            <input 
                type="text"
                name="tiqueteId"
                value={tiqueteId}
                disabled   
            />
            </div>
            <div className="form-group">
            Celda Asignada
            <input 
                type="text"
                name="celdaId"
                value={celdaId}
                disabled   
            />
            </div>
            <div className="form-group">
            Placa Vehiculo
            <input 
                type="text"
                name="placa"
                value={placa}
                disabled   
            />
            </div>
            <div className="form-group">
            Id del empleado
             <input 
                type="text"
                name="empleadoId"
                value={empleadoId}
                onChange={e => setEmpleadoId(e.target.value)} 
                 
            />
            </div>
            <div className="form-group">
            Tipo de Vehiculo
             <input 
                type="text"
                name="tipoVehiculo"
                value={tipoVehiculo}
                 
                disabled 
            />

            </div>
            <div className="form-group">
            Hora de Ingreso
             <input 
                type="text"
                name="horaIngreso"
                value={horaIngreso}
                disabled
                    
            />

            </div>
            <div className="form-group">
            Hora de Salida
             <input 
                type="datetime-local"
                required="required"
                minLength={4}
                maxLength={50}
                name="horaSalida"
                value={horaSalida}
                onChange={e => setHoraSalida(e.target.value)}    
            />
            </div>

            <div className="form-group">
            Cantidad de Minutos
             <input 
                type="text"
                name="canitdadMinutos"
                value={canitdadMinutos}
                required="required"
                minLength={2}
                maxLength={50}
                onChange={e => setCantidadMinutos(e.target.value)}    
            />
            </div>
            <div className="form-group">
            Valor Total
            
             <input 
                type="text"
                name="valorTotal"
                required="required"
                minLength={3}
                maxLength={10}
                value={valorTotal}
                onChange={e => setValorTotal(e.target.value)}    
            />
            </div>
            <button type="submit"> Agregar</button>
        </form>
    </div>
    )}
    </div>
    </div>
    
    
    )
}

export default NewFactura;
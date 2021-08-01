
import React, { useEffect, useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listFacturasAction,
  deleteFacturaAction,
  onlyFacturaAction,
  facturaEditAction
} from "../../domain/actions/facturaActions";
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import Factura from "./Factura";
import Modale from "./Modal";
import Search from "./Search";


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

function Facturas() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listFacturas = () => dispatch(listFacturasAction());
    listFacturas();
  }, [dispatch]);

  const deleteFactura = (facturaId) => {
    dispatch(deleteFacturaAction(facturaId));
    dispatch(listFacturasAction());
  };

  const styles= useStyles();
  const [data, setData]=useState([]);
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [modalEliminar, setModalEliminar]=useState(false);

  const [consolaSeleccionada, setConsolaSeleccionada]=useState({
    
    
    facturaId:'',
    tiqueteId:'',
    empleadoId:'',
    horaSalida: '',
    canitdadMinutos: '',
    valorTotal: ''
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

  const facturaone = (factura) => {
    dispatch(onlyFacturaAction(factura));
    console.log("Todo el objeto seleccionado", factura);
    setpruebam([factura.horaSalida.value, factura.valorTotal.value]);
    //document.getElementById('verTicket').innerHTML = `<li style="color:red">${ticket.celda}</li><li style="color:red">${ticket.horaIngreso}</li>`;
  };
   
   const facturaEdit= async (factura) =>{
    console.log("algo");
    dispatch(await facturaEditAction(factura.facturaId, factura.tiqueteId.tiqueteId, factura.empleadoId.empleadoId, factura.horaSalida.value, factura.canitdadMinutos.value,factura.valorTotal.value))
   }

  
  const facturas = useSelector((state) => state.facturaReducer.facturas);


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
    await listFacturasAction();
  },[])


  const bodyEditar=(
    <div className={styles.modal}>
    <h3>Editar Factura</h3>
    <TextField name="facturaId" className={styles.inputMaterial} label="Id de Factura" disabled onChange={handleChange} value={consolaSeleccionada.facturaId && consolaSeleccionada.facturaId}/>
    <br />
    <TextField name="tiqueteId.tiqueteId" className={styles.inputMaterial} label="Id de Tiquete" onChange={handleChange} value={consolaSeleccionada.tiqueteId.tiqueteId && consolaSeleccionada.tiqueteId.tiqueteId}/>
    <br />
    <TextField name="empleadoId.empleadoId" className={styles.inputMaterial} label="Id de Empleado" onChange={handleChange} value={consolaSeleccionada.empleadoId.empleadoId && consolaSeleccionada.empleadoId.empleadoId}/>
    <br />
    <TextField name="horaSalida.value" className={styles.inputMaterial} label="Hora de Salida" onChange={handleChange} value={consolaSeleccionada.horaSalida.value && consolaSeleccionada.horaSalida.value}/>
    <br />
    <TextField name="canitdadMinutos.value" className={styles.inputMaterial} label="Hora de Salida" onChange={handleChange} value={consolaSeleccionada.canitdadMinutos.value && consolaSeleccionada.canitdadMinutos.value}/>
    <br />
    <TextField name="valorTotal.value" className={styles.inputMaterial} label="Hora de Salida" onChange={handleChange} value={consolaSeleccionada.valorTotal.value && consolaSeleccionada.valorTotal.value}/>
    <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>facturaEdit(consolaSeleccionada)}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar la factura <b>{consolaSeleccionada && consolaSeleccionada.facturaId}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>deleteFactura(consolaSeleccionada.facturaId)} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )
    
  

  return (
    <div className="container">
    <div className="row" text-center>
      <h1 className="text-center">Lista de Facturas</h1>    
      
           
      
      <div className="App">
      
  {/*  <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>*/}
      <br /><br />
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>Id Factura</TableCell>
             <TableCell>Id Tiquete</TableCell>
             <TableCell>Id de empleado</TableCell>
             <TableCell>Hora Salida</TableCell>
             <TableCell>Tiempo Total</TableCell>
             <TableCell>Valor Total</TableCell>
             <TableCell>Acciones</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {facturas.map(consola=>(
             <TableRow key={consola.id}>
               <TableCell>{consola.facturaId}</TableCell>
               <TableCell>{consola.tiqueteId.tiqueteId}</TableCell>
               <TableCell>{consola.empleadoId.empleadoId}</TableCell>
               <TableCell>{consola.horaSalida.value}</TableCell>
               <TableCell>{consola.canitdadMinutos.value}</TableCell>
               <TableCell>{consola.valorTotal.value}</TableCell>
               
               <TableCell>
                 <Edit className={styles.iconos} onClick={()=>seleccionarConsola(consola, 'Editar')}/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete  className={styles.iconos} onClick={()=>seleccionarConsola(consola, 'Eliminar')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     
     <Modal
     open={modalInsertar}
     onClose={abrirCerrarModalInsertar}>
            </Modal>

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



      
      
      </div>

       {/* <div>
       {facturas.length === 0
          ? "No hay registros"
          
          : facturas.map((factura) => (
            
            <Factura key={factura.id} factura={factura}  />           
                                    
          ))}
          

          </div>*/}

       
      {/*<img src={img} alt="logo" className="img-fluid" />*/}
      

    {/*    {facturas.map((factura) => (
          <li key={factura.id}>
            {factura.facturaId}{" "}
            {factura.empleadoId.empleadoId}{" "}
            <button onClick={() => deleteFactura(factura.facturaId)}>Eliminar</button>
            <button onClick={() => facturaone(factura)}>Ver</button>
            <button onClick={() =>facturaEdit(factura)}>Edit</button>
          </li>
        ))}
    */}

        
      
        
        
        </div>
    
  
    
  );
}

export default Facturas;
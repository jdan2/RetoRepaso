import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import NewFactura from './NewFactura';



const baseUrl='https://glacial-everglades-61490.herokuapp.com/api/obtenerfacturas'
const baseUrlM='https://glacial-everglades-61490.herokuapp.com/api/actualizarfactura'


const baseurl3= 'https://glacial-everglades-61490.herokuapp.com/api/crearfactura'

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

function App() {
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

  const baseurl2=`https://glacial-everglades-61490.herokuapp.com/api/eliminarfactura/${consolaSeleccionada.facturaId}`

  const handleChange=e=>{
    const {name, value}=e.target;
    setConsolaSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(consolaSeleccionada);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseurl3, consolaSeleccionada)
    .then(response=>{
      setData(data.concat(response.data))
      abrirCerrarModalInsertar()
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrlM+consolaSeleccionada.facturaId, consolaSeleccionada)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(consola=>{
        if(consolaSeleccionada.facturaId===consola.facturaId){
          consola.facturaId=consolaSeleccionada.facturaId;
          consola.tiqueteId=consolaSeleccionada.tiqueteId.tiqueteId;
          consola.empleadoId=consolaSeleccionada.empleadoId.empleadoId;
          consola.horaSalida=consolaSeleccionada.horaSalida.value;
          consola.canitdadMinutos=consolaSeleccionada.canitdadMinutos.value;
          consola.valorTotal=consolaSeleccionada.valorTotal.value;
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseurl2+consolaSeleccionada.facturaId)
    .then(response=>{
      setData(data.filter(consola=>consola.facturaId!==consolaSeleccionada.facturaId));
      abrirCerrarModalEliminar();
    })
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
    await peticionGet();
  },[])

  const bodyInsertar=(
      
    <div className={styles.modal}>
    <NewFactura/>

      {/*<h3>Agregar Nueva Factura</h3>
      <TextField name="facturaId" className={styles.inputMaterial} label="Id de factura" onChange={handleChange}/>
      <br />
      <TextField name="tiqueteId" className={styles.inputMaterial} label="Id de Tiquete" onChange={handleChange}/>
      <br />
      <TextField name="empleadoId" className={styles.inputMaterial} label="Id de empleado" onChange={handleChange}/>
      <br />
      <TextField name="horaSalida" className={styles.inputMaterial} label="Hora de salida" onChange={handleChange}/>
      <TextField name="canitdadMinutos" className={styles.inputMaterial} label="Tiempo Total" onChange={handleChange}/>
      <TextField name="valorTotal" className={styles.inputMaterial} label="valorTotal" onChange={handleChange}/>
      <br /><br />*/}
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Factura</h3>
      <TextField name="facturaId" className={styles.inputMaterial} label="Id de Factura" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.facturaId}/>
      <br />
      <TextField name="tiqueteId" className={styles.inputMaterial} label="Id de Tiquete" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.tiqueteId.tiqueteId}/>
      <br />
      <TextField name="empleadoId" className={styles.inputMaterial} label="Id de Empleado" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.empleadoId.empleadoId}/>
      <br />
      <TextField name="horaSalida" className={styles.inputMaterial} label="Hora de Salida" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.horaSalida.value}/>
      <br />
      <TextField name="canitdadMinutos" className={styles.inputMaterial} label="Hora de Salida" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.canitdadMinutos.value}/>
      <br />
      <TextField name="valorTotal" className={styles.inputMaterial} label="Hora de Salida" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.valorTotal.value}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar la Factura <b>{consolaSeleccionada && consolaSeleccionada.facturaId}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )


  return (
    <div className="App">
      <br />
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
           {data.map(consola=>(
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
        {bodyInsertar}
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
  );
}

export default App;

const express = require('express');
const router = express.Router();

const CeldaController = require('../controllers/CeldaController');
const serviceLocator = require('../../../infrastructure/config/service-locator');

router.post('/', async(req, res)=>{

    try{
        req.app.serviceLocator = serviceLocator;
        const celda = await CeldaController.crearCelda(req);
        res.status(200).send(celda);
    }catch(err){
        console.log(err)
        res.status(500);
    }  
   
});

router.get('/', async(req, res)=>{
    try {
        req.app.serviceLocator = serviceLocator;
        const celda = await CeldaController.consultarCelda(req); 
        res.status(200).send(celda);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

router.get('/disponibles', async(req, res)=>{
    req.app.serviceLocator = serviceLocator;
    const celdas = await CeldaController.listarCeldasDisponibles(req);
    res.status(200).send(celdas);
})


router.delete('/', async(req, res)=>{

try{

    req.app.serviceLocator = serviceLocator;
    await CeldaController.eliminarCelda(req);
    res.status(200).send(true);
}
catch
{
    res.status(500).send({message:"Error en la eliminacion"});
}
})
router.put('/', async(req, res)=>{
    req.app.serviceLocator = serviceLocator;
    const celda = await CeldaController.modificarCelda(req);
    res.status(200).send(celda);
})


module.exports = router;
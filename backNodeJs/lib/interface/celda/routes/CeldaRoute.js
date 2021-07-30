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

router.post('/', async(req, res)=>{
    req.app.serviceLocator = serviceLocator;
    const celda = await CeldaController.consultarCelda(req);
    res.status(200).send(celda);
})

module.exports = router;
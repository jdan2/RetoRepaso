const express = require('express');
const router = express.Router();

const CeldaController = require('../controllers/CeldaController')

router.post('/', async(req, res)=>{

    try{
        req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
        const celda = await CeldaController.crearCelda(req);
        res.status(200).send(celda);
    }catch(err){
        console.log(err)
        res.status(500);
    }  
   
});

module.exports = router;
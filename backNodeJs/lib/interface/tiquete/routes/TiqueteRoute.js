const express = require('express');
const router = express.Router();

const TiqueteController = require('../controllers/TiqueteController')

router.post('/', async(req, res)=>{

    try{
        req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
        const tiquete = await TiqueteController.createTiquete(req);
        res.status(200).send(tiquete);
    }catch(err){
        console.log(err)
        res.status(500);
    }  
   
});

router.get('/', async(req, res)=>{

    try{
        req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
        if(req.query.id != undefined ){
            const tiquete = await TiqueteController.consultarTiquete(req);
            res.status(200).send(tiquete);
        }else{
            const tiquetes = await TiqueteController.listarTiquetes(req);
            res.status(200).send(tiquetes);
        }
    }catch(err){
        console.log(err)
        res.status(500);
    } 

});

router.put('/', async(req, res)=>{
    try{
        req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
        const tiquete = await TiqueteController.editarTiquete(req);
        res.status(200).send(tiquete);
    }catch(err){
        console.log(err)
        res.status(500);
    }

});

router.delete('/', async(req, res)=>{
    try{
        req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
        const tiquete = await TiqueteController.eliminarTiquete(req);
        res.status(200).send(tiquete);
    }catch(err){
        console.log(err)
        res.status(500);
    }
});

router.get('/tipovehiculo', async(req, res)=>{
    try{
        req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
        const tiquetes = await TiqueteController.ListarTiquetesPorTipoVehiculo(req);
        res.status(200).send(tiquetes);
    }catch(err){
        console.log(err)
        res.status(500);
    }
})

module.exports = router;
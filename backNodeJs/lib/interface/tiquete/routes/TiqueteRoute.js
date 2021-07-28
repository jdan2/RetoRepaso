const express = require('express');
const router = express.Router();

const EstacionamientoController = require('../controllers/TiqueteController')

router.post('/', async(req, res)=>{

    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const estacionamiento = await EstacionamientoController.createEstacionamiento(req);
    res.send(estacionamiento);
});

router.put('/', async(req, res)=>{

    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const estacionamiento = await EstacionamientoController.updateEstacionamiento(req);
    res.send(estacionamiento);
});

router.get('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const estacionamiento = await EstacionamientoController.listEstacionamiento(req);
    res.send(estacionamiento);
});

router.delete('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const estacionamiento = await EstacionamientoController.deleteEstacionamiento(req);
    res.send(estacionamiento);
});

module.exports = router;
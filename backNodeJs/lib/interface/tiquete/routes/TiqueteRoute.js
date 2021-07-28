const express = require('express');
const router = express.Router();

const TiqueteController = require('../controllers/TiqueteController')

router.post('/', async(req, res)=>{

    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const tiquete = await TiqueteController.createTiquete(req);
    res.status(200).send(tiquete);
});

router.get('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    if(req.query.id != undefined ){
        const tiquete = await TiqueteController.consultarTiquete(req);
        res.status(200).send(tiquete);
    }else{
        const tiquetes = await TiqueteController.listarTiquetes(req);
        res.status(200).send(tiquetes);
    }
});

router.put('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const tiquete = await TiqueteController.editarTiquete(req);
    res.status(200).send(tiquete);
});

router.delete('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const tiquete = await TiqueteController.eliminarTiquete(req);
    res.status(200).send(tiquete);
})

module.exports = router;
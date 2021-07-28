const express = require('express');
const router = express.Router();

const TiqueteController = require('../controllers/TiqueteController')

router.post('/', async(req, res)=>{

    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const tiquete = await TiqueteController.createTiquete(req);
    res.send(tiquete);
});

router.get('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    if(req.query.id != undefined ){
        const tiquete = await TiqueteController.consultarTiquete(req);
        res.send(tiquete);
    }else{
        const tiquetes = await TiqueteController.listarTiquetes(req);
        res.send(tiquetes);
    }
});

router.put('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const tiquete = await TiqueteController.editarTiquete(req);
    res.send(tiquete);
});

router.delete('/', async(req, res)=>{
    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const tiquete = await TiqueteController.eliminarTiquete(req);
    res.send(tiquete);
})

module.exports = router;
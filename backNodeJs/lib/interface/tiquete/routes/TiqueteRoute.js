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
    if(req.body.tiqueteId != undefined ){
        console.log("Busqueda por id")
        console.log(req.body.tiqueteId)
        res.send("1")
    }else{
        const tiquetes = await TiqueteController.listarTiquetes(req);
        res.send(tiquetes);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();

const TiqueteController = require('../controllers/TiqueteController')

router.post('/', async(req, res)=>{

    req.app.serviceLocator = require('../../../infrastructure/config/service-locator');
    const tiquete = await TiqueteController.createTiquete(req)
    res.send(tiquete);
});

module.exports = router;
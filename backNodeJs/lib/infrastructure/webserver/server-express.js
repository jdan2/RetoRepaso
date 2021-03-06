var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const apiRoot = process.env.DM_API_ROOT || "";
const tiqueteRoute = require('../../interface/tiquete/routes/TiqueteRoute')
const celdaRoute = require('../../interface/celda/routes/CeldaRoute');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(`${apiRoot}/creartiquete`, tiqueteRoute);
app.use(`${apiRoot}/listartiquetes`, tiqueteRoute);
app.use(`${apiRoot}/editartiquete`, tiqueteRoute);
app.use(`${apiRoot}/consultartiquete`, tiqueteRoute);
app.use(`${apiRoot}/eliminartiquete`, tiqueteRoute);

app.use(`${apiRoot}/crearCelda`, celdaRoute);
app.use(`${apiRoot}/consultarCelda`, celdaRoute);
app.use(`${apiRoot}/modificarCelda`, celdaRoute);
app.use(`${apiRoot}/listarceldas`, celdaRoute);
app.use(`${apiRoot}/eliminarcelda`, celdaRoute);


module.exports = app;

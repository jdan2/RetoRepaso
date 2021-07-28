var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const apiRoot = process.env.DM_API_ROOT || "";
const estacionamientoRoute = require('../../interface/tiquete/routes/TiqueteRoute');
const facturacionRoute = require('../../interface/factura/routes/FacturaRoute');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(`${apiRoot}/estacionamiento`, estacionamientoRoute);
//app.use(`${apiRoot}/facturacion`, facturacionRoute);

module.exports = app;

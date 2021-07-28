var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const apiRoot = process.env.DM_API_ROOT || "";
const tiqueteRoute = require('../../interface/tiquete/routes/TiqueteRoute')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(`${apiRoot}/creartiquete`, tiqueteRoute);
app.use(`${apiRoot}/listartiquetes`, tiqueteRoute);

module.exports = app;

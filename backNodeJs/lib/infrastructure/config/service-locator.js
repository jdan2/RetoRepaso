'use strict';

const constants = require('./constants');
const environment = require('./environment');
const EstacionamientoSerializer = require('../../interface/tiquete/serializers/TiqueteSerializer');
const FacturacionSerializer = require('../../interface/factura/serializers/FacturaSerializer');

function buildBeans() {

  const beans = {
    estacionamientoSerializer: new EstacionamientoSerializer(),
    facturacionSerializer: new FacturacionSerializer()
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    throw new Error('Add In Memory support');
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    const FacturacionRepositoryMongo = require('../repositories/FacturaRepositoryMongo');
    const EstacionamientoRepositoryMongo = require('../repositories/TiqueteRepositoryMongo');
    beans.estacionamientoRepository = new EstacionamientoRepositoryMongo();
    beans.eacturacionRepositoryMongo = new FacturacionRepositoryMongo();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    throw new Error('Add PostgreSQL support');
  } else {
    throw new Error('Add SqLite support');
  }

  return beans;
}

module.exports = buildBeans();

'use strict';

const constants = require('./constants');
const environment = require('./environment');
const TiqueteSerializer = require('../../interface/tiquete/serializers/TiqueteSerializer');
const CeldaSerializer = require('../../interface/celda/serializers/CeldaSerializer')

function buildBeans() {

  const beans = {
    tiqueteSerializer: new TiqueteSerializer(),
    celdaSerializer: new CeldaSerializer()
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    throw new Error('Add In Memory support');
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    const TiqueteRepositoryMongo = require('../repositories/TiqueteRepositoryMongo');
    const CeldaRepositoryMongo = require('../repositories/CeldaRepositorioMongo');
    beans.tiqueteRepository = new TiqueteRepositoryMongo();
    beans.celdaRepository = new CeldaRepositoryMongo();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    throw new Error('Add PostgreSQL support');
  } else {
    throw new Error('Add SqLite support');
  }

  return beans;
}

module.exports = buildBeans();

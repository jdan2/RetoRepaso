'use strict';

const constants = require('./constants');
const environment = require('./environment');
const TiqueteSerializer = require('../../interface/tiquete/serializers/TiqueteSerializer');

function buildBeans() {

  const beans = {
    tiqueteSerializer: new TiqueteSerializer(),
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    throw new Error('Add In Memory support');
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    const TiqueteRepositoryMongo = require('../repositories/TiqueteRepositoryMongo');
    beans.tiqueteRepository = new TiqueteRepositoryMongo();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    throw new Error('Add PostgreSQL support');
  } else {
    throw new Error('Add SqLite support');
  }

  return beans;
}

module.exports = buildBeans();

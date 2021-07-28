'use strict';

const constants = require('./constants');

/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 * `process.env` instruction in any other file or module.
 */
module.exports = (() => {

  const environment = {
    database: {
      dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
      //url: process.env.DATABASE_URI || 'mongodb+srv://admin2:QtC5e4bxxw!tJJL@cluster0.pqco8.mongodb.net/parqueadero2Database?retryWrites=true&w=majority',
      url: process.env.DATABASE_URI || 'mongodb+srv://admin2:QtC5e4bxxw!tJJL@cluster0.pqco8.mongodb.net/db_parqueadero?retryWrites=true&w=majority',
    }
  };

  if (process.env.NODE_ENV === 'test') {
    environment.database = {
      driver: constants.SUPPORTED_DATABASE.IN_MEMORY
    }
  }

  return environment;
})();

'use strict';

const Celda = require('../../domain/tiquete/entities/Celda');
const MongooseCelda = require('../orm/mongoose/schemas/CeldaSchema');
const CeldaRepository = require('../../domain/tiquete/entities/CeldaRepository');

module.exports = class extends CeldaRepository {

  constructor() {
    super();
  }

  async persist(celdaEntity) {
    const { celdaId, disponibilidad, tipoCelda} = celdaEntity;
    const mongooseCelda = new MongooseCelda({ celdaId, disponibilidad, tipoCelda});
    await mongooseCelda.save();   
    return new Celda(mongooseCelda.celdaId, 
      mongooseCelda.disponibilidad, mongooseCelda.tipoCelda); 
  }


};

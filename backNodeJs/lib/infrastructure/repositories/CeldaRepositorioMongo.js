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

  async get(celdaId){
    const mongooseCelda = await MongooseCelda.findOne({celdaId: celdaId}, (err)=>{
      console.log(err)
      throw new Error('ERR_CELDA_NOT_FOUND');
    });
    return new Celda(mongooseCelda.celdaId, mongooseCelda.disponibilidad, mongooseCelda.tipoCelda);
  }

};

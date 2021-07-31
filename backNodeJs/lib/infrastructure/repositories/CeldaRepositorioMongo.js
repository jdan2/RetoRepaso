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
    const mongooseCelda = await MongooseCelda.findOne({celdaId: celdaId});
    return new Celda(mongooseCelda.celdaId, mongooseCelda.disponibilidad, mongooseCelda.tipoCelda, (err, doc)=>{
      if(err) throw new Error('ERR_CELDA_ID_PROVIDED_WAS_NOT_FOUND');
    });
  }

  async modify(celdaEntity){
    const{celdaId, disponibilidad,tipoCelda} = celdaEntity;
    const mongooseCelda = await MongooseCelda.findOneAndUpdate({celdaId:celdaId},{disponibilidad:disponibilidad, tipoCelda:tipoCelda},{new:true});
    return new Celda(mongooseCelda.celdaId, mongooseCelda.disponibilidad, mongooseCelda.tipoCelda);
  }

};

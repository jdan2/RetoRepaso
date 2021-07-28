'use strict';

const TiqueteDto = require('../../domain/tiquete/TiqueteDto');
const MongooseTiquete = require('../orm/mongoose/schemas/TiqueteSchema');
const TiqueteRepository = require('../../domain/tiquete/TiqueteRepository');

module.exports = class extends TiqueteRepository {

  constructor() {
    super();
  }

  async persist(tiqueteEntity) {
    const { celdaId, tipoVehiculo, placa, horaIngreso} = tiqueteEntity;
    const mongooseTiquete = new MongooseTiquete({ celdaId, tipoVehiculo, placa, horaIngreso});
    await mongooseTiquete.save();   
    return new TiqueteDto(mongooseTiquete.id, mongooseTiquete.celdaId, 
      mongooseTiquete.tipoVehiculo, mongooseTiquete.placa, 
      mongooseTiquete.horaIngreso); 
  }

};

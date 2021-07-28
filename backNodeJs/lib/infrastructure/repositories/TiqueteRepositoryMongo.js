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

  async getAll(){
    const mongooseTiquetes = await MongooseTiquete.find();
    return mongooseTiquetes.map((mongooseTiquete)=>{
      return new TiqueteDto(mongooseTiquete.id, mongooseTiquete.celdaId, mongooseTiquete.tipoVehiculo, 
        mongooseTiquete.placa, mongooseTiquete.horaIngreso)
    })
  }

  async modify(tiqueteEntity) {
    const { tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso} = tiqueteEntity;
    const mongooseTiquete = await MongooseTiquete.findByIdAndUpdate(tiqueteId, { celdaId: celdaId, tipoVehiculo: tipoVehiculo, placa: placa, horaIngreso: horaIngreso }, {new: true}, (err, doc)=>{
      if(err) console.log(err);
  });
    return new TiqueteDto(mongooseTiquete.id, mongooseTiquete.celdaId, mongooseTiquete.tipoVehiculo, mongooseTiquete.placa, mongooseTiquete.horaIngreso); 
  }

};

'use strict';

const EstacionamientoDto = require('../../domain/estacionamiento/EstacionamientoDto');
const MongooseTiquete = require('../orm/mongoose/schemas/TiqueteSchema');
const EstacionamientoRepository = require('../../domain/estacionamiento/EstacionamientoRepository');

module.exports = class extends EstacionamientoRepository {

  constructor() {
    super();
  }

  async persist(estacionamientoEntity) {
    const { tiquetes, celdas} = estacionamientoEntity;
    const mongooseEstacionamiento = new MongooseEstacionamiento({ tiquetes, celdas});
    await mongooseEstacionamiento.save();   
    return new EstacionamientoDto(mongooseEstacionamiento.id, mongooseEstacionamiento.tiquetes, mongooseEstacionamiento.celdas); 
  }

  async modify(estacionamientoEntity) {
    const { estacionamientoId, tiquetes, celdas} = estacionamientoEntity;
    const mongooseEstacionamiento = await MongooseEstacionamiento.findByIdAndUpdate(estacionamientoId, { tiquetes: tiquetes, celdas: celdas }, {new: true}, (err, doc)=>{
      if(err) console.log(err);
  });
    return new EstacionamientoDto(mongooseEstacionamiento.id, mongooseEstacionamiento.tiquetes, mongooseEstacionamiento.celdas); 
  }

  async get(estacionamientoEntity){
    const {estacionamientoId} = estacionamientoEntity;
    const mongooseEstacionamiento = await MongooseEstacionamiento.findById(estacionamientoId).exec();
    return new EstacionamientoDto(mongooseEstacionamiento.id, mongooseEstacionamiento.tiquetes, mongooseEstacionamiento.celdas); 
  }

  async remove(estacionamientoId) {
    const {id} = estacionamientoId;
    return MongooseEstacionamiento.findByIdAndDelete(id);
  }

};

'use strict';

const FacturaDto = require('../../domain/facturacion/FacturaDto');
const MongooseFactura = require('../orm/mongoose/schemas/FacturaSchema');
const FacturaRepository = require('../../domain/facturacion/FacturaRepository');

module.exports = class extends FacturaRepository {

  constructor() {
    super();
  }

  async persist(facturaEntity) {
    const { horaSalida, cantidadHoras, valorTotal, empleadoId} = facturaEntity;
    const mongooseFactura = new MongooseFactura({ horaSalida, cantidadHoras, valorTotal, empleadoId});
    await mongooseFactura.save();   
    return new FacturaDto(mongooseFactura.id, mongooseFactura.horaSalida, mongooseFactura.cantidadHoras, mongooseFactura.valorTotal, mongooseFactura.empleadoId); 
  }

  /*async modify(estacionamientoEntity) {
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
  }*/

};

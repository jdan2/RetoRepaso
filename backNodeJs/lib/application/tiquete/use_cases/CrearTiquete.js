const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (horaIngreso, placa, celda, tipoVehiculo, { tiqueteRepository }) => {

  const estacionamiento = new Tiquete(null, horaIngreso, placa, celda, tipoVehiculo);
  
  return tiqueteRepository.persist(estacionamiento);
};
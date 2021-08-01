const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (tiqueteId, celda_id, tipoVehiculo, placa, horaIngreso, { tiqueteRepository }) => {

  const tiquete = new Tiquete(tiqueteId, celda_id, tipoVehiculo, placa, horaIngreso);
  
  return tiqueteRepository.persist(tiquete);
};
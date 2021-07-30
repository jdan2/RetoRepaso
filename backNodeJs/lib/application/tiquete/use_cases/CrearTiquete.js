const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (celdaId, tipoVehiculo, placa, horaIngreso, { tiqueteRepository }) => {

  const tiquete = new Tiquete(null, celdaId, tipoVehiculo, placa, horaIngreso);
  
  return tiqueteRepository.persist(tiquete);
};
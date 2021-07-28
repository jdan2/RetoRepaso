const Tiquete = require('../../../domain/tiquete/Tiquete');
const CeldaId = require('../../../domain/tiquete/values/CeldaId')

module.exports = (tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso, { tiqueteRepository }) => {

  const tiquete = new Tiquete(tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso);
  
  return tiqueteRepository.persist(tiquete);
};
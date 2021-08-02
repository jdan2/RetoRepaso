const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (celdaId, tipoVehiculo, placa, horaIngreso, { tiqueteRepository }) => {

  if(!celdaId) throw new Error('ERR_CELDA_ID_WAS_NOT_PROVIDED');
  if(!tipoVehiculo) throw new Error('ERR_TIPOVEHICULO_WAS_NOT_PROVIDED');
  if(!placa) throw new Error('ERR_PLACA_WAS_NOT_PROVIDED');
  if(!horaIngreso) throw new Error('ERR_HORA_INGRESO_WAS_NOT_PROVIDED');
  const tiquete = new Tiquete(null, celdaId, tipoVehiculo, placa, horaIngreso);
  
  return tiqueteRepository.persist(tiquete);
};
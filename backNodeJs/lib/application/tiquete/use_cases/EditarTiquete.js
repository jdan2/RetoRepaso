const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (id, celdaId, tipoVehiculo, placa, horaIngreso, {tiqueteRepository}) =>{

    const tiquete = new Tiquete(id, celdaId, tipoVehiculo, placa, horaIngreso);

    return tiqueteRepository.modify(tiquete);

}
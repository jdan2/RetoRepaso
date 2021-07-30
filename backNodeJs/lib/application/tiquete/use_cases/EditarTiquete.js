const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (id, horaIngreso, placa, celdaId, tipoCelda, {tiqueteRepository}) =>{

    const estacionamiento = new Tiquete(id, horaIngreso, placa, celdaId, tipoCelda);

    return tiqueteRepository.modify(estacionamiento);

}
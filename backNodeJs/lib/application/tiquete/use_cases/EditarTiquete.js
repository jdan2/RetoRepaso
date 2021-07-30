const Tiquete = require('../../../domain/tiquete/Tiquete');

module.exports = (id, horaIngreso, placa, celdaId, tipoCelda, {tiqueteRepository}) =>{

    const tiquete = new Tiquete(id, horaIngreso, placa, celdaId, tipoCelda);

    return tiqueteRepository.modify(tiquete);

}
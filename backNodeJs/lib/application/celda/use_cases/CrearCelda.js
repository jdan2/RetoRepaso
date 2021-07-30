const Celda = require('../../../domain/tiquete/entities/Celda');

module.exports = (celdaId, disponibilidad, tipoCelda, {celdaRepository})=>{
    const celda = new Celda(celdaId, disponibilidad, tipoCelda)
    return celdaRepository.persist(celda);
}
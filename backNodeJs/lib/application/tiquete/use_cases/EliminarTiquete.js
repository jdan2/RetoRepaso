const EstacionamientoId = require('../../../domain/tiquete/values/EstacionamientoId');

module.exports = (id, {estacionamientoRepository})=>{
    
    const estacionamientoId = new EstacionamientoId(id);
    return estacionamientoRepository.remove(estacionamientoId);
}
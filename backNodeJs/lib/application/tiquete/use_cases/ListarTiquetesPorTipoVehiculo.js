module.exports = (tipoVehiculo, {tiqueteRepository})=>{
    const tiquetes = tiqueteRepository.getByTipoVehiculo(tipoVehiculo);
    return tiquetes;
}
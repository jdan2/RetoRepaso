const CrearTiquete = require('../../../application/tiquete/use_cases/CrearTiquete');
const ListarTiquetes = require('../../../application/tiquete/use_cases/ListarTiquetes');
const EditarTiquete = require('../../../application/tiquete/use_cases/EditarTiquete');


module.exports = {
    async createTiquete(httpRequest){
    
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso } = httpRequest.body;
        const tiquete = await CrearTiquete(tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso, serviceLocator);
        return tiquete;
    },
    async listarTiquetes(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const tiquetes = await ListarTiquetes(serviceLocator);
        return tiquetes;
    },
    async editarTiquete(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso } = httpRequest.body;
        const tiquete = await EditarTiquete(tiqueteId, celdaId, tipoVehiculo, placa, horaIngreso, serviceLocator);
        return tiquete;
    }



}
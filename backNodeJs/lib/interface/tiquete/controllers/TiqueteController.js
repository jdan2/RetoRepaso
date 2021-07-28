const CrearTiquete = require('../../../application/tiquete/use_cases/CrearTiquete');
const ListarTiquetes = require('../../../application/tiquete/use_cases/ListarTiquetes');

module.exports = {
    async createTiquete(httpRequest){
    
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { celdaId, tipoVehiculo, placa, horaIngreso } = httpRequest.body;
        const tiquete = await CrearTiquete(celdaId, tipoVehiculo, placa, horaIngreso, serviceLocator);
        return tiquete;
    },
    async listarTiquetes(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const tiquetes = await ListarTiquetes(serviceLocator);
        return tiquetes;
    }


}
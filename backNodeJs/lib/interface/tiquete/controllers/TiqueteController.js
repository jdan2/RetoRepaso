const CrearTiquete = require('../../../application/tiquete/use_cases/CrearTiquete');

module.exports = {
    async createTiquete(httpRequest){
    
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { celdaId, tipoVehiculo, placa, horaIngreso } = httpRequest.body;
        const tiquete = await CrearTiquete(celdaId, tipoVehiculo, placa, horaIngreso, serviceLocator);
        return tiquete;
    }
}
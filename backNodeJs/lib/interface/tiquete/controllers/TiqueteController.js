const CrearTiquete = require('../../../application/tiquete/use_cases/CrearTiquete');
const ListarTiquetes = require('../../../application/tiquete/use_cases/ListarTiquetes');
const EditarTiquete = require('../../../application/tiquete/use_cases/EditarTiquete');
const ConsultarTiquete = require('../../../application/tiquete/use_cases/ConsultarTiquete');
const EliminarTiquete = require('../../../application/tiquete/use_cases/EliminarTiquete');
const ListarTiquetesPorTipoVehiculo = require('../../../application/tiquete/use_cases/ListarTiquetesPorTipoVehiculo');
const ConsultarCelda = require('../../../application/celda/use_cases/ConsultarCelda');

module.exports = {
    async createTiquete(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { id, celdaId, tipoVehiculo, placa, horaIngreso } = httpRequest.body;
        const celda = await ConsultarCelda(celdaId, serviceLocator);
        const tiquete = await CrearTiquete(celda.celdaId, tipoVehiculo, placa, horaIngreso, serviceLocator);

        return tiquete;
    },
    async listarTiquetes(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const tiquetes = await ListarTiquetes(serviceLocator);
        return tiquetes;
    },
    async editarTiquete(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const {id} = httpRequest.query;
        const { celdaId, tipoVehiculo, placa, horaIngreso } = httpRequest.body;
        const tiquete = await EditarTiquete(id, celdaId, tipoVehiculo, placa, horaIngreso, serviceLocator);
        return tiquete;
    },
    async consultarTiquete(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { id } = httpRequest.query;
        const tiquete = await ConsultarTiquete(id, serviceLocator);
        return tiquete;
    },
    async eliminarTiquete(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { id } = httpRequest.query;
        const tiquete = await EliminarTiquete(id, serviceLocator);
        return tiquete;
    },
    async ListarTiquetesPorTipoVehiculo(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator;
        const {tipoVehiculo} = httpRequest.body;
        const tiquetes = await ListarTiquetesPorTipoVehiculo(tipoVehiculo, serviceLocator);
        return tiquetes;
    }


}
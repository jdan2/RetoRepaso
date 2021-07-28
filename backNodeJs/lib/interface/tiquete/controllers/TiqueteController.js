const CrearEstacionamiento = require('../../../application/tiquete/use_cases/CrearTiquete');
const ActualizarEstacionamiento = require('../../../application/tiquete/use_cases/EditarTiquete');
const ListarEstacionamiento = require('../../../application/tiquete/use_cases/ConsultarTiquete');
const EliminarEstacionamiento = require('../../../application/tiquete/use_cases/EliminarTiquete');

module.exports = {
    async createEstacionamiento(req){
    
        const serviceLocator = req.app.serviceLocator; 
        const { tiquetes, celdas } = req.body;
        const estacionamiento = await CrearEstacionamiento(tiquetes, celdas, serviceLocator);
        return estacionamiento;
    },
    async updateEstacionamiento(req){

        const serviceLocator = req.app.serviceLocator; 
        const { id, tiquetes, celdas } = req.body;
        const estacionamiento = await ActualizarEstacionamiento(id, tiquetes, celdas, serviceLocator);
        return estacionamiento;
    }, 
    async listEstacionamiento(req){

        const serviceLocator = req.app.serviceLocator; 
        const {id } = req.query;
        const estacionamiento = await ListarEstacionamiento(id, serviceLocator);
        return estacionamiento;
    },
    async deleteEstacionamiento(req){
        const serviceLocator = req.app.serviceLocator; 
        const {id } = req.query;
        const estacionamiento = await EliminarEstacionamiento(id, serviceLocator);
        return estacionamiento;
    }

}
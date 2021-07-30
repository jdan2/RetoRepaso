const ModificarCelda = require('../../../application/celda/use_cases/ModificarCelda');
const ConsultarCelda = require('../../../application/celda/use_cases/ConsultarCelda');
const CrearCelda = require('../../../application/celda/use_cases/CrearCelda');

module.exports = {
    async crearCelda(httpRequest){
    
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { celdaId, disponibilidad, tipoCelda } = httpRequest.body;
        const celda = await CrearCelda(celdaId, disponibilidad, tipoCelda, serviceLocator);
        return celda;
    },

    async consultarCelda(httpRequest){

        const serviceLocator = httpRequest.app.serviceLocator;
        const {id} = httpRequest.query;
        const celda = await ConsultarCelda( id, serviceLocator);
        return celda;

    },

    async modificarCelda(httpRequest){
        const serviceLocator = httpRequest.app.serviceLocator;
        const {id} = httpRequest.query;
        const {disponibilidad, tipoCelda } = httpRequest.body;
        return await ModificarCelda(id, disponibilidad,tipoCelda,serviceLocator);

    }

    


}
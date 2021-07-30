const CrearCelda = require('../../../application/celda/use_cases/CrearCelda');

module.exports = {
    async crearCelda(httpRequest){
    
        const serviceLocator = httpRequest.app.serviceLocator; 
        const { celdaId, disponibilidad, tipoCelda } = httpRequest.body;
        const celda = await CrearCelda(celdaId, disponibilidad, tipoCelda, serviceLocator);
        return celda;
    }


}
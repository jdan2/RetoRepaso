const Celda = require('../lib/domain/tiquete/entities/Celda');
const CeldaRepository = require('../lib/domain/tiquete/entities/CeldaRepository');
const mockCeldaRepository = new CeldaRepository();
const ListarCeldasDisponibles = require('../lib/application/celda/use_cases/ListarCeldasDisponibles');

describe('should resolve list celdas avialable', ()=>{
    test('should resolve with the list celdas avialables', async()=>{

        //given
        const celda1 = new Celda("C000", "true", "carro");
        const celda2 = new Celda("C001", "true", "carro");
        const celda3 = new Celda("C002", "true", "moto");
        const celda4 = new Celda("C003", "true", "carro");
        const celda5 = new Celda("C004", "true", "moto");
    
        const persistedCeldas = []
        persistedCeldas.push(celda1);
        persistedCeldas.push(celda2);
        persistedCeldas.push(celda3);
        persistedCeldas.push(celda4);
        persistedCeldas.push(celda5);
        mockCeldaRepository.getAvailableCeldas = jest.fn(()=> persistedCeldas);
    
        //when
        const celdas = await ListarCeldasDisponibles({celdaRepository: mockCeldaRepository});
    
        //then
        expect(celdas).toEqual(persistedCeldas);
        expect(celdas.length).toEqual(5);
        expect(celdas[0].getCeldaId()).toEqual(persistedCeldas[0].celdaId);
        expect(celdas[0].getDisponibilidad()).toEqual(persistedCeldas[0].disponibilidad);
        expect(celdas[0].getTipoCelda()).toEqual(persistedCeldas[0].tipoCelda);

    });
});
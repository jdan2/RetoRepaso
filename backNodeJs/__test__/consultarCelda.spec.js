const Celda = require('../lib/domain/tiquete/entities/Celda');
const CeldaRepository = require('../lib/domain/tiquete/entities/CeldaRepository');
const mockCeldaRepository = new CeldaRepository();
const ConsultarCelda = require('../lib/application/celda/use_cases/ConsultarCelda');

describe('Se evalua la consulta de celda por Id', ()=>{
    test('debería resolver la busqueda de una celda por Id', async()=>{
        //given
        const persistedCelda = new Celda("C111k", "true", "doble");
        mockCeldaRepository.get = jest.fn(()=> persistedCelda);
    
        //when
        const celda = await ConsultarCelda("C111k", {celdaRepository: mockCeldaRepository});
        
        //expect
        expect(mockCeldaRepository.get).toHaveBeenCalledWith("C111k");
        expect(celda).toEqual(persistedCelda);
        expect(celda.getCeldaId()).toEqual(persistedCelda.celdaId);
        expect(celda.getDisponibilidad()).toEqual(persistedCelda.disponibilidad);
        expect(celda.getTipoCelda()).toEqual(persistedCelda.tipoCelda);
    })
    test('debería resolver un fallo de busqueda de una celda por Id', async()=>{
        //Arrange
        const persistedCelda = new Celda("C111k", "true", "doble");
        mockCeldaRepository.get = jest.fn(()=> persistedCelda);
    
        //Act
        const celdaId = null;
        
        //Assert
        expect(() => ConsultarCelda(celdaId,{celdaRepository: mockCeldaRepository})).toThrow('ERR_CELDA_ID_WAS_NOT_PROVIDED');
    })
});

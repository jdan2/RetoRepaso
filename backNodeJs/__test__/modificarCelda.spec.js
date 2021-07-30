const Celda = require('../lib/domain/tiquete/entities/Celda');
const CeldaRepository = require('../lib/domain/tiquete/entities/CeldaRepository');
const mockCeldaRepository = new CeldaRepository();
const EditarCelda = require('../lib/application/celda/use_cases/ModificarCelda');

test('should resolve with the newly persisted celda', async()=>{

    //given
    const persistedCelda = new Celda("T222K", "true", "Carro");
    mockCeldaRepository.modify = jest.fn(()=> persistedCelda);

    //when
    const celda = await EditarCelda("T222K", "true", "Moto", {celdaRepository: mockCeldaRepository});

    //then
    expect(mockCeldaRepository.modify).toHaveBeenCalledWith(new Celda("T222K", "true", "Moto"));
    expect(celda).toEqual(persistedCelda);
    expect(celda.getCeldaId()).toEqual(persistedCelda.celdaId);
    expect(celda.getDisponibilidad()).toEqual(persistedCelda.disponibilidad);
    expect(celda.getTipoCelda()).toEqual(persistedCelda.tipoCelda);
});
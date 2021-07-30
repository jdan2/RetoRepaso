const Celda = require('../lib/domain/tiquete/entities/Celda');
const CeldaRepository = require('../lib/domain/tiquete/entities/CeldaRepository');
const mockCeldaRepository = new CeldaRepository();
const CrearCelda = require('../lib/application/celda/use_cases/CrearCelda');

test('should resolve with the newly persisted celda', async()=>{

    //given
    const persistedCelda = new Celda("C111k", "true", "doble");
    mockCeldaRepository.persist = jest.fn(()=> persistedCelda);

    //when
    const celda = await CrearCelda("C111k", "true", "doble", {celdaRepository: mockCeldaRepository});

    //expect
    expect( mockCeldaRepository.persist).toHaveBeenCalledWith(new Celda("C111k", "true", "doble"));


});
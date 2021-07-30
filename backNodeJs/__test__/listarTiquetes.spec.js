const Tiquete = require('../lib/domain/tiquete/Tiquete');
const TiqueteRepository = require('../lib/domain/tiquete/TiqueteRepository');
const mockTiqueteRepository = new TiqueteRepository();
const ListarTiquetes = require('../lib/application/tiquete/use_cases/ListarTiquetes');

test('should resolve with the removed tiquete', async()=>{

    //given
    //const persistedTiquete = new Tiquete("T222K", "C123", "Carro", "GGK898", "06:24");
    const tiquete1 = new Tiquete("T222K", "C123", "Carro", "GGK898", "06:24");
    const tiquete2 = new Tiquete("T333K", "C124", "Camion", "HOU513", "09:23");
    const persistedTiquetes = []
    persistedTiquetes.push(tiquete1);
    persistedTiquetes.push(tiquete2);
    mockTiqueteRepository.getAll = jest.fn(()=> persistedTiquetes);

    //when
    const tiquetes = await ListarTiquetes({tiqueteRepository: mockTiqueteRepository});

    //then
    expect(mockTiqueteRepository.getAll).toHaveBeenCalledWith();
    expect(tiquetes).toEqual(persistedTiquetes);
    expect(tiquetes.length).toEqual(2);
    expect(tiquetes[0].getTiqueteId()).toEqual(persistedTiquetes[0].tiqueteId);
    expect(tiquetes[0].getCeldaId()).toEqual(persistedTiquetes[0].celdaId);
    expect(tiquetes[0].getTipoVehiculo()).toEqual(persistedTiquetes[0].tipoVehiculo);
    expect(tiquetes[0].getPlaca()).toEqual(persistedTiquetes[0].placa);
    expect(tiquetes[0].getHoraIngreso()).toEqual(persistedTiquetes[0].horaIngreso);
});
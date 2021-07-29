const Tiquete = require('../lib/domain/tiquete/Tiquete');
const TiqueteRepository = require('../lib/domain/tiquete/TiqueteRepository');
const mockTiqueteRepository = new TiqueteRepository();
const ListarTiquetesPorTipoVehiculo = require('../lib/application/tiquete/use_cases/ListarTiquetesPorTipoVehiculo');

test('should resolve with the list tiquetes by tipoVehiculo', async()=>{

    //given
    const tiquete1 = new Tiquete("T222K", "C123", "Carro", "GGK898", "06:24");
    const tiquete2 = new Tiquete("T333K", "C124", "Carro", "HOU513", "09:23");
    const tiquete3 = new Tiquete("T444K", "C125", "Carro", "CFY513", "10:23");
    const tiquete4 = new Tiquete("T555K", "C126", "Carro", "TTY659", "16:23");
    const persistedTiquetes = []
    persistedTiquetes.push(tiquete1);
    persistedTiquetes.push(tiquete2);
    persistedTiquetes.push(tiquete3);
    persistedTiquetes.push(tiquete4);
    mockTiqueteRepository.getByTipoVehiculo = jest.fn(()=> persistedTiquetes);

    //when
    const tiquetes = await ListarTiquetesPorTipoVehiculo('camill', {tiqueteRepository: mockTiqueteRepository});

    //then
    expect(mockTiqueteRepository.getByTipoVehiculo).toHaveBeenCalledWith("camill");
    expect(tiquetes).toEqual(persistedTiquetes);
    expect(tiquetes.length).toEqual(4);
    expect(tiquetes[0].getTiqueteId()).toEqual(persistedTiquetes[0].tiqueteId);
    expect(tiquetes[0].getCeldaId()).toEqual(persistedTiquetes[0].celdaId);
    expect(tiquetes[0].getTipoVehiculo()).toEqual(persistedTiquetes[0].tipoVehiculo);
    expect(tiquetes[0].getPlaca()).toEqual(persistedTiquetes[0].placa);
    expect(tiquetes[0].getHoraIngreso()).toEqual(persistedTiquetes[0].horaIngreso);
});
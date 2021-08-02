const Tiquete = require('../lib/domain/tiquete/Tiquete');
const TiqueteRepository = require('../lib/domain/tiquete/TiqueteRepository');
const mockTiqueteRepository = new TiqueteRepository();
const EditarTiquete = require('../lib/application/tiquete/use_cases/EditarTiquete');

test('should resolve with the newly persisted tiquete', async()=>{

    //given
    const persistedTiquete = new Tiquete("T000K", "C001", "Carro", "CCC111", "01:00");
    mockTiqueteRepository.modify = jest.fn(()=> persistedTiquete);

    //when
    const tiquete = await EditarTiquete("T000K", "C999", "Moto", "CC55Y", "02:20", {tiqueteRepository: mockTiqueteRepository});

    //then
    expect(mockTiqueteRepository.modify).toHaveBeenCalledWith(new Tiquete("T000K", "C999", "Moto", "CC55Y", "02:20"));
    expect(tiquete).toEqual(persistedTiquete);
    expect(tiquete.getTiqueteId()).toEqual(persistedTiquete.tiqueteId);
    expect(tiquete.getCeldaId()).toEqual(persistedTiquete.celdaId);
    expect(tiquete.getTipoVehiculo()).toEqual(persistedTiquete.tipoVehiculo);
    expect(tiquete.getPlaca()).toEqual(persistedTiquete.placa);
    expect(tiquete.getHoraIngreso()).toEqual(persistedTiquete.horaIngreso);
});
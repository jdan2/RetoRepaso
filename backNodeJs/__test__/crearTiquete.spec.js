const Tiquete = require('../lib/domain/tiquete/Tiquete');
const TiqueteRepository = require('../lib/domain/tiquete/TiqueteRepository');
const mockTiqueteRepository = new TiqueteRepository();
const CrearTiquete = require('../lib/application/tiquete/use_cases/CrearTiquete');

test('should resolve with the newly persisted tiquete', async()=>{

    //given
    const persistedTiquete = new Tiquete("T222K", "C123", "Carro", "GGK898", "06:24");
    mockTiqueteRepository.persist = jest.fn(()=> persistedTiquete);

    //when
    const tiquete = await CrearTiquete("T222K", "C123", "Carro", "GGK898", "06:24", {tiqueteRepository: mockTiqueteRepository});

    //then
    expect(mockTiqueteRepository.persist).toHaveBeenCalledWith(new Tiquete("T222K", "C123", "Carro", "GGK898", "06:24"));
    expect(tiquete).toEqual(persistedTiquete);
    expect(tiquete.getTiqueteId()).toEqual(persistedTiquete.tiqueteId);
    expect(tiquete.getCeldaId()).toEqual(persistedTiquete.celdaId);
    expect(tiquete.getTipoVehiculo()).toEqual(persistedTiquete.tipoVehiculo);
    expect(tiquete.getPlaca()).toEqual(persistedTiquete.placa);
    expect(tiquete.getHoraIngreso()).toEqual(persistedTiquete.horaIngreso);
});


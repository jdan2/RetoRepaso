const TiqueteRepository = require('../lib/domain/tiquete/TiqueteRepository');
const mockTiqueteRepository = new TiqueteRepository();
const EliminarTiquete = require('../lib/application/tiquete/use_cases/EliminarTiquete');

test('should resolve with the removed tiquete', async()=>{

    //given
    returnValue = {};
    mockTiqueteRepository.remove = jest.fn(()=> returnValue);;

    //when
    await EliminarTiquete("T222K", {tiqueteRepository: mockTiqueteRepository});

    //then
    expect(mockTiqueteRepository.remove).toHaveBeenCalledWith("T222K");

});
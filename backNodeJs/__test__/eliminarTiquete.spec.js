const TiqueteRepository = require('../lib/domain/tiquete/TiqueteRepository');
const mockTiqueteRepository = new TiqueteRepository();
const EliminarTiquete = require('../lib/application/tiquete/use_cases/EliminarTiquete');

describe('Testea la eliminación de tiquetes', ()=>{
    test('should resolve with the removed tiquete', async()=>{

        //Arrange
        mockTiqueteRepository.remove = jest.fn();;
    
        //Act
        await EliminarTiquete("T222K", {tiqueteRepository: mockTiqueteRepository});
    
        //Assert
        expect(mockTiqueteRepository.remove).toHaveBeenCalledWith("T222K");
    
    });
})

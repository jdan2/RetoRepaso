package co.com.sofka.api;
import co.com.sofka.model.estacionamiento.Tiquete;
import co.com.sofka.usecase.tiquete.TiqueteUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
   private final TiqueteUseCase tiqueteUseCase;
   private final TiqueteMapper tiqueteMapper;


    @GetMapping(path = "/path")
    public String commandName() {
//      return useCase.doAction();
        return "Hello World";
    }

    @PostMapping(path = "/crear")
    public TiqueteDTO crearTiquete(@RequestBody TiqueteDTO tiqueteDTO) {
        Tiquete tiquete = tiqueteMapper.dtoToTiquete(tiqueteDTO);
        return tiqueteMapper.tiqueteToDto(tiqueteUseCase.crearTiquete(tiquete));
    }
}

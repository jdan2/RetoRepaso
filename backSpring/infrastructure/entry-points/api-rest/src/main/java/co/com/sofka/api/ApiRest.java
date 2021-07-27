package co.com.sofka.api;
import co.com.sofka.model.estacionamiento.Estacionamiento;
import co.com.sofka.usecase.estacionamiento.EstacionamientoUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
   private final EstacionamientoUseCase estacionamientoUseCase;


    @GetMapping(path = "/path")
    public String commandName() {
//      return useCase.doAction();
        return "Hello World";
    }

    @PostMapping(path = "/crear")
    public Estacionamiento crearEstacionamiento(@RequestBody Estacionamiento estacionamiento) {
        return estacionamientoUseCase.crearEstacionamiento(estacionamiento);
    }
}

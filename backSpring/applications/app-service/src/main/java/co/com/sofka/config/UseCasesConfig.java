package co.com.sofka.config;

import co.com.sofka.model.estacionamiento.gateways.EstacionamientoRepository;
import co.com.sofka.usecase.estacionamiento.EstacionamientoUseCase;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan(basePackages = "co.com.sofka.usecase",
        includeFilters = {
                @ComponentScan.Filter(type = FilterType.REGEX, pattern = "^.+UseCase$")
        },
        useDefaultFilters = false)
public class UseCasesConfig {
        public EstacionamientoUseCase crear(EstacionamientoRepository estacionamientoRepository){
                return new EstacionamientoUseCase(estacionamientoRepository);
        }
}

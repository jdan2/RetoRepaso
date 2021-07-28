package co.com.sofka.config;

import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.tiquete.gateways.TiqueteRepository;
import co.com.sofka.usecase.factura.FacturaUseCase;
import co.com.sofka.usecase.tiquete.TiqueteUseCase;
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
        public TiqueteUseCase crear(TiqueteRepository tiqueteRepository){
                return new TiqueteUseCase(tiqueteRepository);
        }
        public FacturaUseCase crear(FacturaRepository facturaRepository){
                return new FacturaUseCase(facturaRepository);
        }
}

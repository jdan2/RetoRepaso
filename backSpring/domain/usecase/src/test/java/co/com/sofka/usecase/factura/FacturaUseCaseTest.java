package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = FacturaUseCase.class)
class FacturaUseCaseTest {

    @MockBean
    FacturaRepository facturaRepository;

    @Autowired
    FacturaUseCase facturaUseCase;

    @Test
    @DisplayName("Test crear Factura")
    public void crearFactura(){

        Factura factura = new Factura("1", TiqueteId.of("2"), EmpleadoId.of("3"), HoraSalida.of("3:30"),
                CanitdadMinutos.of("30"), ValorTotal.of("3000"));

        Mockito.when(facturaRepository.crearFactura(factura)).thenReturn(factura);

        Factura result = facturaUseCase.crearFactura(factura);

        Assertions.assertEquals(factura.getFacturaId(),result.getFacturaId());

    }


    }

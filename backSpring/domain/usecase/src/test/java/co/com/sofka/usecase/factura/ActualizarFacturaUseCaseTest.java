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

@SpringBootTest(classes = ActualizarFacturaUseCase.class)
class ActualizarFacturaUseCaseTest {

    @MockBean
    FacturaRepository facturaRepository;

    @Autowired
    ActualizarFacturaUseCase actualizarFacturaUseCase;

    @Test
    @DisplayName("Test actualizar factura")
    public void crearConsultaHappyTest() {

        Factura factura = new Factura("1", TiqueteId.of("2"), EmpleadoId.of("3"), HoraSalida.of("3:30"),
                CanitdadMinutos.of("30"), ValorTotal.of("3000"));

        Mockito.when(facturaRepository.consultarFactura(factura.getFacturaId())).thenReturn(factura);
        Mockito.when(facturaRepository.updateFactura(factura)).thenReturn(factura);

        Factura result = actualizarFacturaUseCase.updateFactura(factura);

        Assertions.assertEquals(result.getFacturaId(),"1");
        Assertions.assertEquals(result.getHoraSalida().getValue(),"3:30");
    }

}
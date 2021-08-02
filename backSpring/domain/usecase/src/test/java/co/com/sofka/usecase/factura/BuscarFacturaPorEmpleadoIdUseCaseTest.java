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

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = BuscarFacturaPorEmpleadoIdUseCase.class)
class BuscarFacturaPorEmpleadoIdUseCaseTest {

    @MockBean
    FacturaRepository facturaRepository;

    @Autowired
    BuscarFacturaPorEmpleadoIdUseCase buscarFacturaPorEmpleadoIdUseCase;

    @Test
    @DisplayName("Test buscar factura por empleado id")
    public void facturaByEmpleadoId(){

        Factura factura = new Factura("1", TiqueteId.of("2"), EmpleadoId.of("3"), HoraSalida.of("3:30"),
                CanitdadMinutos.of("30"), ValorTotal.of("3000"));
        Factura factura2 = new Factura("1", TiqueteId.of("2"), EmpleadoId.of("3"), HoraSalida.of("3:30"),
                CanitdadMinutos.of("30"), ValorTotal.of("3000"));

        List<Factura> facturas = new ArrayList<>();
        facturas.add(factura);
        facturas.add(factura2);

        Mockito.when(facturaRepository.findFacturaByEmpleadoId(factura.getEmpleadoId())).thenReturn(facturas);

        List<Factura> result = buscarFacturaPorEmpleadoIdUseCase.findFacturaByEmpleadoId(factura.getEmpleadoId());

        Assertions.assertEquals(2,result.size());
    }

}
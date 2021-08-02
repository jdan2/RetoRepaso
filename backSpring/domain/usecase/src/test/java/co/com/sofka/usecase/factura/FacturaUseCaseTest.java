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

    @Test
    @DisplayName("Consultar Factura por id")
        public void consultarFactura(){
            Factura factura = new Factura("1", TiqueteId.of("2"), EmpleadoId.of("3"), HoraSalida.of("3:30"),
                    CanitdadMinutos.of("30"), ValorTotal.of("3000"));

        Mockito.when(facturaRepository.consultarFactura(factura.getFacturaId())).thenReturn(factura);

        Factura result = facturaUseCase.consultarFactura(factura.getFacturaId());

        Assertions.assertEquals(factura.getFacturaId(),result.getFacturaId());


        }

    @Test
    @DisplayName("Consultar Facturas")
    public void consultarFacturas(){
        Factura factura = new Factura("1", TiqueteId.of("2"), EmpleadoId.of("3"), HoraSalida.of("3:30"),
                CanitdadMinutos.of("30"), ValorTotal.of("3000"));

        Factura factura2 = new Factura("12", TiqueteId.of("22"), EmpleadoId.of("32"), HoraSalida.of("3:30"),
                CanitdadMinutos.of("30"), ValorTotal.of("3000"));

        List<Factura> facturas = new ArrayList<>();
        facturas.add(factura);
        facturas.add(factura2);

        Mockito.when(facturaRepository.listarFactura()).thenReturn(facturas);


        List<Factura> result = facturaUseCase.listarFacturas();

        Assertions.assertEquals(2,result.size());


    }

    }

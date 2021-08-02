package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.*;
import co.com.sofka.model.tiquete.Tiquete;
import co.com.sofka.model.tiquete.values.CeldaId;
import co.com.sofka.model.tiquete.values.HoraIngreso;
import co.com.sofka.model.tiquete.values.Placa;
import co.com.sofka.model.tiquete.values.TipoVehiculo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = ValorTotalFacturaUseCase.class)
class ValorTotalFacturaUseCaseTest {


    @MockBean
    FacturaRepository facturaRepository;

    @Autowired
    ValorTotalFacturaUseCase valorTotalFacturaUseCase;


    @Test
    @DisplayName("Valor total")
    public void valorTotal(){

        Tiquete tiquete = new Tiquete("1", TipoVehiculo.of("carro"),
                CeldaId.of("2"), Placa.of("adv"), HoraIngreso.of("3:20"));

        CanitdadMinutos canitdadMinutos = new CanitdadMinutos("10");
        ValorTotal valorTotal = new ValorTotal("300");

        Mockito.when(facturaRepository.valorTotal(tiquete.getTipoVehiculo(),canitdadMinutos)).thenReturn(valorTotal);

        ValorTotal result = valorTotalFacturaUseCase.valorTotal(tiquete.getTipoVehiculo(),canitdadMinutos);

        Assertions.assertEquals(valorTotal.getValue(),result.getValue());

    }
}
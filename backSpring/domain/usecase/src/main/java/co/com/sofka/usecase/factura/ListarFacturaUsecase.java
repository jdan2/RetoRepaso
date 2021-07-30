package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.tiquete.Tiquete;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class ListarFacturaUsecase {

    private final FacturaRepository facturaRepository;

    public List<Factura> listarFacturas(){
        return facturaRepository.listarFactura();
    }
}

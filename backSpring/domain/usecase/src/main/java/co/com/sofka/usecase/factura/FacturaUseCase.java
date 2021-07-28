package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class FacturaUseCase {

    private final FacturaRepository facturaRepository;

    public Factura crearFactura(Factura factura){
        return facturaRepository.crearFactura(factura);
    }

    public List<Factura> listarFactura(){
        return facturaRepository.listarFactura();
    }
}

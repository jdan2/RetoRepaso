package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ActualizarFacturaUseCase {
    private final FacturaRepository facturaRepository;

    public Factura updateFactura(Factura factura) {
        return facturaRepository.updateFactura(factura);
    }
}

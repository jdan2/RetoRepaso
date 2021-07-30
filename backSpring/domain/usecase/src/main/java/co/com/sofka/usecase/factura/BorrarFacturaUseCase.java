package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.gateways.FacturaRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class BorrarFacturaUseCase {

    private final FacturaRepository facturaRepository;

    public void deleteFactura(String idFactura){
        facturaRepository.deletefactura(idFactura);
    }

}

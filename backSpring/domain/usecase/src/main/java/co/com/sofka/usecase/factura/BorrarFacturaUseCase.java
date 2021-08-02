package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.EmpleadoId;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class BorrarFacturaUseCase {

    private final FacturaRepository facturaRepository;

    public void deleteFactura(String idFactura, EmpleadoId empleadoId){
        facturaRepository.deletefactura(idFactura,empleadoId);
    }

}

package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.CanitdadMinutos;
import co.com.sofka.model.factura.values.ValorTotal;
import co.com.sofka.model.tiquete.values.TipoVehiculo;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ValorTotalFacturaUseCase {

    private final FacturaRepository facturaRepository;

    ValorTotal valorTotal (TipoVehiculo tipoVehiculo, CanitdadMinutos canitdadMinutos){
        return facturaRepository.valorTotal(tipoVehiculo,canitdadMinutos);
    }

}

package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.EmpleadoId;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class BuscarFacturaPorEmpleadoIdUseCase {

    private final FacturaRepository facturaRepository;

    public List<Factura> findFacturaByEmpleadoId(EmpleadoId empleadoId){
        return facturaRepository.findFacturaByEmpleadoId(empleadoId);
    }

}

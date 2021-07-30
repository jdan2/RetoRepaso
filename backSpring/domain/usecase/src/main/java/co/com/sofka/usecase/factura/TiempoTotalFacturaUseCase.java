package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.CanitdadMinutos;
import co.com.sofka.model.factura.values.HoraSalida;
import co.com.sofka.model.tiquete.values.HoraIngreso;

public class TiempoTotalFacturaUseCase {
    private FacturaRepository facturaRepository;

    public CanitdadMinutos canitdadMinutos(HoraIngreso horaIngreso, HoraSalida horaSalida){
        return facturaRepository.canitdadMinutos(horaIngreso,horaSalida);
    }
}

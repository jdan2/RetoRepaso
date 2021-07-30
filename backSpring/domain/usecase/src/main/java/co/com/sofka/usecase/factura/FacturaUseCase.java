package co.com.sofka.usecase.factura;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.CanitdadMinutos;
import co.com.sofka.model.factura.values.HoraSalida;
import co.com.sofka.model.tiquete.values.HoraIngreso;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class FacturaUseCase {

    private final FacturaRepository facturaRepository;

    public Factura crearFactura(Factura factura){
        return facturaRepository.crearFactura(factura);
    }

    public Factura consultarFactura(String idFactura){
        return  facturaRepository.consultarFactura(idFactura);
    }
    public List<Factura> listarFacturas(){
        return facturaRepository.listarFactura();
    }

    public CanitdadMinutos canitdadMinutos(HoraIngreso horaIngreso, HoraSalida horaSalida){
        return facturaRepository.canitdadMinutos(horaIngreso,horaSalida);
    }

}

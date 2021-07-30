package co.com.sofka.model.factura.gateways;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.values.CanitdadMinutos;
import co.com.sofka.model.factura.values.HoraSalida;
import co.com.sofka.model.factura.values.ValorTotal;
import co.com.sofka.model.tiquete.values.HoraIngreso;
import co.com.sofka.model.tiquete.values.TipoVehiculo;

import java.util.List;

public interface FacturaRepository {

    Factura crearFactura(Factura factura);
    List<Factura> listarFactura();
    Factura consultarFactura (String idFactura);
    Factura updateFactura(Factura factura);
    void deletefactura(String idFactura);
    CanitdadMinutos canitdadMinutos(HoraIngreso horaIngreso, HoraSalida horaSalida);
    ValorTotal valorTotal (TipoVehiculo tipoVehiculo, CanitdadMinutos canitdadMinutos);
}

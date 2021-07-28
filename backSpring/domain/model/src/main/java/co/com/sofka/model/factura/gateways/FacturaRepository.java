package co.com.sofka.model.factura.gateways;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.tiquete.Tiquete;

import java.util.List;

public interface FacturaRepository {

    Factura crearFactura(Factura factura);
    List<Factura> listarFactura();
}

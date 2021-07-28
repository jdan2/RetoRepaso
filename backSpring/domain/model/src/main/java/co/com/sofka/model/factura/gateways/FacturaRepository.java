package co.com.sofka.model.factura.gateways;

import co.com.sofka.model.factura.Factura;

import java.util.List;

public interface FacturaRepository {

    Factura crearFactura(Factura factura);
    List<Factura> listarFactura();
    Factura consultarFactura (String idFactura);
    Factura updateFactura(Factura factura);
    void deletefactura(String idFactura);
}

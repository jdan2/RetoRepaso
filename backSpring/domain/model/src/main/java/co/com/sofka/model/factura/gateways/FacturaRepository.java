package co.com.sofka.model.factura.gateways;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.values.CanitdadMinutos;
import co.com.sofka.model.factura.values.EmpleadoId;
import co.com.sofka.model.factura.values.HoraSalida;
import co.com.sofka.model.tiquete.values.HoraIngreso;

import java.util.List;

public interface FacturaRepository {

    Factura crearFactura(Factura factura);
    List<Factura> listarFactura();
    Factura consultarFactura (String idFactura);
    Factura updateFactura(Factura factura);
    void deletefactura(String idFactura);
    CanitdadMinutos canitdadMinutos(HoraIngreso horaIngreso, HoraSalida horaSalida);
<<<<<<< HEAD

=======
    List<Factura> findFacturaByEmpleadoId(EmpleadoId empleadoId);
>>>>>>> c621c970075d4ccc955f84f5ac23678e51e92e10
}

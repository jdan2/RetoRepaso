package co.com.sofka.model.factura;

import co.com.sofka.model.factura.values.Correo;
import co.com.sofka.model.factura.values.EmpleadoId;
import co.com.sofka.model.factura.values.Nombre;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Empleado {

    private Nombre nombre;
    private Correo correo;
    private EmpleadoId empleadoId;

    public Empleado(Nombre nombre, Correo correo, EmpleadoId empleadoId) {
        this.nombre = nombre;
        this.correo = correo;
        this.empleadoId = empleadoId;
    }

    public Empleado() {
    }
}

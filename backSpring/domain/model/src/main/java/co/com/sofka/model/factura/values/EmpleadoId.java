package co.com.sofka.model.factura.values;

import co.com.sofka.model.tiquete.values.CeldaId;

import java.util.Objects;

public class EmpleadoId {

    private final String empleadoId;

    public EmpleadoId(String empleadoId) {
        this.empleadoId = empleadoId;
    }

    public static EmpleadoId of(String id){
        return new EmpleadoId(id);
    }

    public String getEmpleadoId() {
        return empleadoId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmpleadoId that = (EmpleadoId) o;
        return Objects.equals(empleadoId, that.empleadoId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(empleadoId);
    }
}

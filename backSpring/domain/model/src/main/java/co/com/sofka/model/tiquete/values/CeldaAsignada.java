package co.com.sofka.model.tiquete.values;

import co.com.sofka.model.factura.values.HoraSalida;

import java.util.Objects;

public class CeldaAsignada {

    private final String value;

    public  CeldaAsignada(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value == ""){
            throw new IllegalArgumentException("La celda asignada no puede estar vacio");
        }

    }

    public static CeldaAsignada of(String value){
        return new CeldaAsignada(value);
    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CeldaAsignada that = (CeldaAsignada) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

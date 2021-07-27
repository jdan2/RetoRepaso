package co.com.sofka.model.estacionamiento.values;

import java.util.Objects;

public class TipoCelda {

    private final String value;

    public  TipoCelda(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value == ""){
            throw new IllegalArgumentException("El tipo de cedula asignada no puede estar vacio");
        }

    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TipoCelda tipoCelda = (TipoCelda) o;
        return Objects.equals(value, tipoCelda.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

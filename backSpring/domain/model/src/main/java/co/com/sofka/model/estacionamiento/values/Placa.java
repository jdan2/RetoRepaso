package co.com.sofka.model.estacionamiento.values;

import java.util.Objects;

public class Placa
{
    private final String value;

    public  Placa(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value == ""){
            throw new IllegalArgumentException("La placa asignada no puede estar vacio");
        }

    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Placa placa = (Placa) o;
        return Objects.equals(value, placa.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

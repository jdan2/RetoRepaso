package co.com.sofka.model.factura.values;

import java.util.Objects;

public class Nombre {

    private final String value;

    public Nombre(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value.isEmpty()){
            throw new IllegalArgumentException("El nombre no puede estar vacio");
        }

        if (this.value.length() <= 5){
            throw new IllegalArgumentException("El nombre debe ser mayor a 5 caracteres");
        }

        if (this.value.length() >= 30){
            throw new IllegalArgumentException("El nombre debe ser menor a 30 caracteres");
        }

    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Nombre nombre = (Nombre) o;
        return Objects.equals(value, nombre.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

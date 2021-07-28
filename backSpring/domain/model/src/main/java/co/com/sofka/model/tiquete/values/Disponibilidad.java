package co.com.sofka.model.tiquete.values;

import java.util.Objects;

public class Disponibilidad {

    private final Boolean value;

    public  Disponibilidad(Boolean value) {
        this.value = Objects.requireNonNull(value);
        if(this.value == null){
            throw new IllegalArgumentException("La disponibilidad no puede estar vacio");
        }
    }

    public Boolean getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Disponibilidad that = (Disponibilidad) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

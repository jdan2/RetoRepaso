package co.com.sofka.model.tiquete.values;

import java.util.Objects;

public class HoraIngreso {

    private final Integer value;

    public  HoraIngreso(Integer value) {
        this.value = Objects.requireNonNull(value);
        if(this.value.equals(null)){
            throw new IllegalArgumentException("La hora asignada no puede estar vacio");
        }

    }

    public Integer getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HoraIngreso that = (HoraIngreso) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

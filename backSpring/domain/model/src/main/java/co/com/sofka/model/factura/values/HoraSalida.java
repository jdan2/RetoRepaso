package co.com.sofka.model.factura.values;

import java.util.Objects;

public class HoraSalida {

    private final String value;

    public  HoraSalida(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value.isEmpty()){
            throw new IllegalArgumentException("La hora asignada no puede estar vacio");
        }

    }

    public String getValue() {
        return value;
    }

    public static HoraSalida of(String value){
        return new HoraSalida(value);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HoraSalida that = (HoraSalida) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

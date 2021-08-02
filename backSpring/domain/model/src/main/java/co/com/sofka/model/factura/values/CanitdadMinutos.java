package co.com.sofka.model.factura.values;

import java.util.Objects;

public class CanitdadMinutos {

    private final String value;

    public CanitdadMinutos(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value.equals(null)){
            throw new IllegalArgumentException("Valor no puede estar vacio");
        }

    }

    public static CanitdadMinutos of(String value){
        return new CanitdadMinutos(value);
    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CanitdadMinutos that = (CanitdadMinutos) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

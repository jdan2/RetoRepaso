package co.com.sofka.model.factura.values;

import java.util.Objects;

public class ValorTotal {

    private final String value;

    public ValorTotal(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value.equals(null)){
            throw new IllegalArgumentException("Valor no puede estar vacio");
        }

    }

    public String getValue() {
        return value;
    }

    public static ValorTotal of(String value){
        return new ValorTotal(value);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ValorTotal that = (ValorTotal) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

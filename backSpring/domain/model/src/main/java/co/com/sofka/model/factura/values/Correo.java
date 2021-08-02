package co.com.sofka.model.factura.values;

import java.util.Objects;

public class Correo {

    private final String value;

    public Correo(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value.isEmpty()){
            throw new IllegalArgumentException("El email no puede estar vacio");
        }

        if (this.value.length() <= 5){
            throw new IllegalArgumentException("El email debe ser mayor a 5 caracteres");
        }

        if (!value.matches("^[_A-Za-z0-9\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")){
            throw new IllegalArgumentException("El email no es valido");
        }

    }

    public static Correo of(String value){
        return new Correo(value);
    }



    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Correo correo = (Correo) o;
        return Objects.equals(value, correo.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

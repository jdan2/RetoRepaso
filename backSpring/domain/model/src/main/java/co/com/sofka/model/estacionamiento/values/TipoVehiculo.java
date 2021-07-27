package co.com.sofka.model.estacionamiento.values;

import java.util.Objects;

public class TipoVehiculo {

    private final String value;

    public  TipoVehiculo(String value) {
        this.value = Objects.requireNonNull(value);
       /* if(this.value.isEmpty()){
            throw new IllegalArgumentException("El tipo de vehiculo asignada no puede estar vacio");
        }*/

    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TipoVehiculo that = (TipoVehiculo) o;
        return Objects.equals(value, that.value);
    }

}

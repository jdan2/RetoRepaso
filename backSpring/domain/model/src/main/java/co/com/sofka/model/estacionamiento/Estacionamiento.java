package co.com.sofka.model.estacionamiento;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder(toBuilder = true)
public class Estacionamiento {

    private String parkingId;
    private Set<Tiquetes> tiqueteSet;
    private Set<Celda> celdaSet;

    public Estacionamiento() {
    }

    public Estacionamiento(String parkingId) {
        this.parkingId = parkingId;
    }

    public Estacionamiento(String parkingId, Set<Tiquetes> tiqueteSet, Set<Celda> celdaSet) {
        this.parkingId = parkingId;
        this.tiqueteSet = tiqueteSet;
        this.celdaSet = celdaSet;
    }
}

package co.com.sofka.model.estacionamiento;

import co.com.sofka.model.estacionamiento.values.CeldaId;
import co.com.sofka.model.estacionamiento.values.Disponibilidad;
import co.com.sofka.model.estacionamiento.values.TipoCelda;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Celda {
    private CeldaId celdaId;
    private Disponibilidad disponibilidad;
    private TipoCelda tipoCelda;

    public Celda(CeldaId celdaId, Disponibilidad disponibilidad, TipoCelda tipoCelda) {
        this.celdaId = celdaId;
        this.disponibilidad = disponibilidad;
        this.tipoCelda = tipoCelda;
    }

    public Celda() {
    }
}

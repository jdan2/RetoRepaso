package co.com.sofka.model.estacionamiento;

import co.com.sofka.model.estacionamiento.values.*;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Tiquetes {

    private TipoVehiculo tipoVehiculo;
    private CeldaAsignada celdaAsignada;
    private Placa placa;
    private HoraIngreso horaIngreso;
    private TiqueteId tiqueteId;

    public Tiquetes(TipoVehiculo tipoVehiculo, CeldaAsignada celdaAsignada, Placa placa, HoraIngreso horaIngreso, TiqueteId tiqueteId) {
        this.tipoVehiculo = tipoVehiculo;
        this.celdaAsignada = celdaAsignada;
        this.placa = placa;
        this.horaIngreso = horaIngreso;
        this.tiqueteId = tiqueteId;
    }

    public Tiquetes() {
    }
}

package co.com.sofka.model.tiquete;

import co.com.sofka.model.tiquete.values.*;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Tiquete {

    private TiqueteId tiqueteId;
    private TipoVehiculo tipoVehiculo;
    private CeldaId celdaId;
    private Placa placa;
    private HoraIngreso horaIngreso;

    public Tiquete() {
    }

    public Tiquete(TiqueteId tiqueteId,TipoVehiculo tipoVehiculo, CeldaId celdaId, Placa placa, HoraIngreso horaIngreso) {
        this.tipoVehiculo = tipoVehiculo;
        this.celdaId = celdaId;
        this.placa = placa;
        this.horaIngreso = horaIngreso;
        this.tiqueteId = tiqueteId;
    }


}

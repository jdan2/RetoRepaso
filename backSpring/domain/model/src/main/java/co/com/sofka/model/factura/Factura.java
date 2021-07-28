package co.com.sofka.model.factura;
import co.com.sofka.model.factura.values.*;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Factura {

    private FacturaId facturaId;
    private TiqueteId tiqueteId;
    private EmpleadoId empleadoId;
    private HoraSalida horaSalida;
    private CanitdadMinutos canitdadMinutos;
    private ValorTotal valorTotal;

    public Factura(FacturaId facturaId, TiqueteId tiqueteId, EmpleadoId empleadoId, HoraSalida horaSalida, CanitdadMinutos canitdadMinutos, ValorTotal valorTotal) {
        this.facturaId = facturaId;
        this.tiqueteId = tiqueteId;
        this.empleadoId = empleadoId;
        this.horaSalida = horaSalida;
        this.canitdadMinutos = canitdadMinutos;
        this.valorTotal = valorTotal;
    }

    public Factura() {
    }
}

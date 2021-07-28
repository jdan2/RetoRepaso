package co.com.sofka.mongo.entities;

import co.com.sofka.model.factura.values.*;

public class FacturaEntity {

    private FacturaId facturaId;
    private TiqueteId tiqueteId;
    private EmpleadoId empleadoId;
    private HoraSalida horaSalida;
    private CanitdadMinutos canitdadMinutos;
    private ValorTotal valorTotal;

    public FacturaEntity(FacturaId facturaId, TiqueteId tiqueteId, EmpleadoId empleadoId, HoraSalida horaSalida, CanitdadMinutos canitdadMinutos, ValorTotal valorTotal) {
        this.facturaId = facturaId;
        this.tiqueteId = tiqueteId;
        this.empleadoId = empleadoId;
        this.horaSalida = horaSalida;
        this.canitdadMinutos = canitdadMinutos;
        this.valorTotal = valorTotal;
    }

    public FacturaEntity(TiqueteId tiqueteId, EmpleadoId empleadoId, HoraSalida horaSalida, CanitdadMinutos canitdadMinutos, ValorTotal valorTotal) {
        this.tiqueteId = tiqueteId;
        this.empleadoId = empleadoId;
        this.horaSalida = horaSalida;
        this.canitdadMinutos = canitdadMinutos;
        this.valorTotal = valorTotal;
    }

    public FacturaEntity() {
    }

    public FacturaId getFacturaId() {
        return facturaId;
    }

    public void setFacturaId(FacturaId facturaId) {
        this.facturaId = facturaId;
    }

    public TiqueteId getTiqueteId() {
        return tiqueteId;
    }

    public void setTiqueteId(TiqueteId tiqueteId) {
        this.tiqueteId = tiqueteId;
    }

    public EmpleadoId getEmpleadoId() {
        return empleadoId;
    }

    public void setEmpleadoId(EmpleadoId empleadoId) {
        this.empleadoId = empleadoId;
    }

    public HoraSalida getHoraSalida() {
        return horaSalida;
    }

    public void setHoraSalida(HoraSalida horaSalida) {
        this.horaSalida = horaSalida;
    }

    public CanitdadMinutos getCanitdadMinutos() {
        return canitdadMinutos;
    }

    public void setCanitdadMinutos(CanitdadMinutos canitdadMinutos) {
        this.canitdadMinutos = canitdadMinutos;
    }

    public ValorTotal getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(ValorTotal valorTotal) {
        this.valorTotal = valorTotal;
    }
}

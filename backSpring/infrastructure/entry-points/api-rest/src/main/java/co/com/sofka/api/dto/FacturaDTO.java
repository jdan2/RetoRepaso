package co.com.sofka.api.dto;

import co.com.sofka.model.factura.values.*;
import co.com.sofka.model.factura.values.TiqueteId;
import co.com.sofka.model.tiquete.values.*;

public class FacturaDTO {

    private FacturaId facturaId;
    private co.com.sofka.model.factura.values.TiqueteId tiqueteId;
    private EmpleadoId empleadoId;
    private HoraSalida horaSalida;
    private CanitdadMinutos canitdadMinutos;
    private ValorTotal valorTotal;

    public FacturaDTO(FacturaId facturaId, TiqueteId tiqueteId, EmpleadoId empleadoId, HoraSalida horaSalida, CanitdadMinutos canitdadMinutos, ValorTotal valorTotal) {
        this.facturaId = facturaId;
        this.tiqueteId = tiqueteId;
        this.empleadoId = empleadoId;
        this.horaSalida = horaSalida;
        this.canitdadMinutos = canitdadMinutos;
        this.valorTotal = valorTotal;
    }

    public FacturaDTO() {
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


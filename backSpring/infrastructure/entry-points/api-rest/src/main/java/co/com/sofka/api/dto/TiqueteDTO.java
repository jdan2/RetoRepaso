package co.com.sofka.api.dto;

import co.com.sofka.model.tiquete.values.*;

public class TiqueteDTO {

    private String tiqueteId;
    private TipoVehiculo tipoVehiculo;
    private CeldaId celdaId;
    private Placa placa;
    private HoraIngreso horaIngreso;

    public TiqueteDTO(String tiqueteId, TipoVehiculo tipoVehiculo, CeldaId celdaId, Placa placa, HoraIngreso horaIngreso) {
        this.tiqueteId = tiqueteId;
        this.tipoVehiculo = tipoVehiculo;
        this.celdaId = celdaId;
        this.placa = placa;
        this.horaIngreso = horaIngreso;
    }

    public TiqueteDTO() {

    }

    public String getTiqueteId() {
        return tiqueteId;
    }

    public void setTiqueteId(String tiqueteId) {
        this.tiqueteId = tiqueteId;
    }

    public TipoVehiculo getTipoVehiculo() {
        return tipoVehiculo;
    }

    public void setTipoVehiculo(TipoVehiculo tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
    }

    public CeldaId getCeldaId() {
        return celdaId;
    }

    public void setCeldaId(CeldaId celdaId) {
        this.celdaId = celdaId;
    }

    public Placa getPlaca() {
        return placa;
    }

    public void setPlaca(Placa placa) {
        this.placa = placa;
    }

    public HoraIngreso getHoraIngreso() {
        return horaIngreso;
    }

    public void setHoraIngreso(HoraIngreso horaIngreso) {
        this.horaIngreso = horaIngreso;
    }
}

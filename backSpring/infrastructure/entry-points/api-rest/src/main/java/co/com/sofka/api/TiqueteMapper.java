package co.com.sofka.api;

import co.com.sofka.model.estacionamiento.Tiquete;
import org.springframework.stereotype.Component;

@Component
public class TiqueteMapper {

    public TiqueteDTO tiqueteToDto(Tiquete tiquete){
        return new TiqueteDTO(
                tiquete.getTiqueteId(),
                tiquete.getTipoVehiculo(),
                tiquete.getCeldaId(),
                tiquete.getPlaca(),
                tiquete.getHoraIngreso());
    }

    public Tiquete dtoToTiquete(TiqueteDTO tiqueteDTO){
        return new Tiquete(
                tiqueteDTO.getTiqueteId(),
                tiqueteDTO.getTipoVehiculo(),
                tiqueteDTO.getCeldaId(),
                tiqueteDTO.getPlaca(),
                tiqueteDTO.getHoraIngreso());
    }
}

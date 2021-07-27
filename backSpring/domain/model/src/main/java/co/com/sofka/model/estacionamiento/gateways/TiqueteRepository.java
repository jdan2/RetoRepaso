package co.com.sofka.model.estacionamiento.gateways;

import co.com.sofka.model.estacionamiento.Tiquete;

import java.util.List;

public interface TiqueteRepository {

    Tiquete crearTiquete(Tiquete tiquete);
    List<Tiquete> listarTiquete();

}

package co.com.sofka.model.tiquete.gateways;

import co.com.sofka.model.tiquete.Tiquete;

import java.util.List;

public interface TiqueteRepository {

    Tiquete crearTiquete(Tiquete tiquete);
    List<Tiquete> listarTiquete();

}

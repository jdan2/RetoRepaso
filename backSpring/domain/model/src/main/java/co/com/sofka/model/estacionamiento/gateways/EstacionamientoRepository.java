package co.com.sofka.model.estacionamiento.gateways;

import co.com.sofka.model.estacionamiento.Estacionamiento;

import java.util.List;

public interface EstacionamientoRepository {

    Estacionamiento crearEstacionamiento(Estacionamiento estacionamiento);
    List<Estacionamiento> listarEstacionamiento();

}

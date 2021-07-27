package co.com.sofka.usecase.estacionamiento;

import co.com.sofka.model.estacionamiento.Estacionamiento;
import co.com.sofka.model.estacionamiento.gateways.EstacionamientoRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class EstacionamientoUseCase {

    private final EstacionamientoRepository estacionamientoRepository;

    public Estacionamiento crearEstacionamiento(Estacionamiento estacionamiento){
        return estacionamientoRepository.crearEstacionamiento(estacionamiento);
    }

    public List<Estacionamiento> listarEstacionamiento(){
        return estacionamientoRepository.listarEstacionamiento();
    }

}

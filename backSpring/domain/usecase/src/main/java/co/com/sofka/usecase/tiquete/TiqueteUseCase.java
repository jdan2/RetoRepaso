package co.com.sofka.usecase.tiquete;

import co.com.sofka.model.tiquete.Tiquete;
import co.com.sofka.model.tiquete.gateways.TiqueteRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class TiqueteUseCase {

    private final TiqueteRepository tiqueteRepository;

    public Tiquete crearTiquete(Tiquete tiquete){
        return tiqueteRepository.crearTiquete(tiquete);
    }

    public List<Tiquete> listarTiquete(){
        return tiqueteRepository.listarTiquete();
    }

}

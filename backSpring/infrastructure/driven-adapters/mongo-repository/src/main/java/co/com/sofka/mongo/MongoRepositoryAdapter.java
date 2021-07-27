package co.com.sofka.mongo;

import co.com.sofka.model.estacionamiento.Estacionamiento;
import co.com.sofka.model.estacionamiento.gateways.EstacionamientoRepository;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MongoRepositoryAdapter extends AdapterOperations<Estacionamiento,Estacionamiento,String, MongoDBRepository>
 implements EstacionamientoRepository
{

    public MongoRepositoryAdapter(MongoDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, Estacionamiento.class));
    }

    @Override
    public Estacionamiento crearEstacionamiento(Estacionamiento estacionamiento) {
        return this.repository.save(estacionamiento);
    }

    @Override
    public List<Estacionamiento> listarEstacionamiento() {
        return this.repository.findAll();
    }
}

package co.com.sofka.mongo;

import co.com.sofka.model.tiquete.Tiquete;
import co.com.sofka.model.tiquete.gateways.TiqueteRepository;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MongoRepositoryAdapter extends AdapterOperations<Tiquete, Tiquete,String, MongoDBRepository>
 implements TiqueteRepository
{

    public MongoRepositoryAdapter(MongoDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, Tiquete.class));
    }


    @Override
    public Tiquete crearTiquete(Tiquete tiquete) {
        return this.repository.save(tiquete);
    }

    @Override
    public List<Tiquete> listarTiquete() {
        return this.repository.findAll();
    }
}

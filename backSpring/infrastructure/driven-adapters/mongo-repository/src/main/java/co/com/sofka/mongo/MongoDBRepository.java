package co.com.sofka.mongo;

import co.com.sofka.model.estacionamiento.Estacionamiento;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface MongoDBRepository extends MongoRepository<Estacionamiento, String>, QueryByExampleExecutor<Estacionamiento>{
}

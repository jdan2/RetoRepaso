package co.com.sofka.mongo;

import co.com.sofka.model.tiquete.Tiquete;
import co.com.sofka.mongo.entities.TiqueteEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface MongoDBRepository extends MongoRepository<TiqueteEntity, String>, QueryByExampleExecutor<TiqueteEntity>{
}

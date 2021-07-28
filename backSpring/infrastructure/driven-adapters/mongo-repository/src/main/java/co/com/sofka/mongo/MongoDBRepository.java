package co.com.sofka.mongo;

import co.com.sofka.model.tiquete.Tiquete;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface MongoDBRepository extends MongoRepository<Tiquete, String>, QueryByExampleExecutor<Tiquete>{
}

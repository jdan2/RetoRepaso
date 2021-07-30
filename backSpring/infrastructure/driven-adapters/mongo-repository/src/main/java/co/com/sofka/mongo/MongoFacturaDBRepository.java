package co.com.sofka.mongo;

import co.com.sofka.mongo.entities.FacturaEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface MongoFacturaDBRepository extends MongoRepository<FacturaEntity, String>, QueryByExampleExecutor<FacturaEntity> {
}

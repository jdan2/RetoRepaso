package co.com.sofka.mongo;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.tiquete.Tiquete;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface MongoFacturaDBRepository extends MongoRepository<Factura, String>, QueryByExampleExecutor<Factura> {
}

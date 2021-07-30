package co.com.sofka.mongo;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.values.EmpleadoId;
import co.com.sofka.mongo.entities.FacturaEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import java.util.List;

public interface MongoFacturaDBRepository extends MongoRepository<FacturaEntity, String>, QueryByExampleExecutor<FacturaEntity> {
    List<Factura> findFacturaByEmpleadoId(EmpleadoId empleadoId);
}

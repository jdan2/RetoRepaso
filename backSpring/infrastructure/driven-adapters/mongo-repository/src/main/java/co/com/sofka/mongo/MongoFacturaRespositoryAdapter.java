package co.com.sofka.mongo;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.mongo.entities.FacturaEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MongoFacturaRespositoryAdapter extends AdapterOperations<FacturaEntity, FacturaEntity,String, MongoFacturaDBRepository>
        implements FacturaRepository
{

    public MongoFacturaRespositoryAdapter(MongoFacturaDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, FacturaEntity.class));
    }


    @Override
    public Factura crearFactura(Factura factura) {
        FacturaEntity facturaEntity = new FacturaEntity(factura.getTiqueteId(),factura.getEmpleadoId(),factura.getHoraSalida(),factura.getCanitdadMinutos(),factura.getValorTotal());
        FacturaEntity newFacturaEntity = this.repository.save(facturaEntity);
        Factura factura1 = factura;
        factura1.setFacturaId(newFacturaEntity.getFacturaId());
        return factura1;
    }

    @Override
    public List<Factura> listarFactura() {
        return null;
    }
}

package co.com.sofka.mongo;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.factura.values.FacturaId;
import co.com.sofka.mongo.entities.FacturaEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import lombok.var;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

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
        FacturaEntity facturaE = new FacturaEntity(factura.getFacturaId(),factura.getTiqueteId(),factura.getEmpleadoId(),factura.getHoraSalida(),factura.getCanitdadMinutos(),factura.getValorTotal());
        FacturaEntity newFacturaEntity = this.repository.save(facturaE);
        Factura factura1 = factura;
        factura1.setFacturaId(newFacturaEntity.getFacturaId());
        return factura1;
    }

    @Override
    public List<Factura> listarFactura() {
        return  null;
    }

    @Override
    public Factura consultarFactura(String idFactura) {
         Optional<FacturaEntity> facturaEntity = this.repository.findById(idFactura);
        Factura factura = new Factura(facturaEntity.get().getFacturaId(), facturaEntity.get().getTiqueteId()
                , facturaEntity.get().getEmpleadoId(), facturaEntity.get().getHoraSalida()
                ,facturaEntity.get().getCanitdadMinutos(),facturaEntity.get().getValorTotal());
        FacturaId facturaId = new FacturaId(idFactura);
        factura.setFacturaId(facturaId);
        return factura;

    }

    @Override
    public Factura updateFactura(Factura factura) {
        FacturaEntity facturaE = new FacturaEntity(factura.getFacturaId(),factura.getTiqueteId(),factura.getEmpleadoId(),factura.getHoraSalida(),factura.getCanitdadMinutos(),factura.getValorTotal());
        FacturaEntity newFacturaEntity = this.repository.save(facturaE);
        Factura factura1 = factura;
        factura1.setFacturaId(newFacturaEntity.getFacturaId());
        return factura1;
    }

}

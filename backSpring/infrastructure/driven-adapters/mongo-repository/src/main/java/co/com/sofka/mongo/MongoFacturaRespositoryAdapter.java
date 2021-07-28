package co.com.sofka.mongo;

import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.gateways.FacturaRepository;
import co.com.sofka.model.tiquete.Tiquete;
import co.com.sofka.model.tiquete.gateways.TiqueteRepository;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;

import java.util.List;

public class MongoFacturaRespositoryAdapter extends AdapterOperations<Factura, Factura,String, MongoFacturaDBRepository>
        implements FacturaRepository
{

    public MongoFacturaRespositoryAdapter(MongoFacturaDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, Factura.class));
    }


    @Override
    public Factura crearFactura(Factura factura) {
        return null;
    }

    @Override
    public List<Factura> listarFactura() {
        return null;
    }
}

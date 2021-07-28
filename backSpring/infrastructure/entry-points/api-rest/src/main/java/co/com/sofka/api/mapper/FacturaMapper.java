package co.com.sofka.api.mapper;

import co.com.sofka.api.dto.FacturaDTO;
import co.com.sofka.model.factura.Factura;
import org.springframework.stereotype.Component;

@Component
public class FacturaMapper {

    public FacturaDTO facturaToDto(Factura factura){
        return new FacturaDTO(
                factura.getFacturaId(),
                factura.getTiqueteId(),
                factura.getEmpleadoId(),
                factura.getHoraSalida(),
                factura.getCanitdadMinutos(),
                factura.getValorTotal());
    }

    public Factura dtoToFactura(FacturaDTO facturaDTO){
        return new Factura(
                facturaDTO.getFacturaId(),
                facturaDTO.getTiqueteId(),
                facturaDTO.getEmpleadoId(),
                facturaDTO.getHoraSalida(),
                facturaDTO.getCanitdadMinutos(),
                facturaDTO.getValorTotal());
    }
}

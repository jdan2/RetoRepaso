package co.com.sofka.api;
import co.com.sofka.api.dto.FacturaDTO;
import co.com.sofka.api.dto.TiqueteDTO;
import co.com.sofka.api.mapper.FacturaMapper;
import co.com.sofka.api.mapper.TiqueteMapper;
import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.tiquete.Tiquete;
import co.com.sofka.usecase.factura.ActualizarFacturaUseCase;
import co.com.sofka.usecase.factura.FacturaUseCase;
import co.com.sofka.usecase.tiquete.TiqueteUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
   private final TiqueteUseCase tiqueteUseCase;
   private final TiqueteMapper tiqueteMapper;
   private final FacturaUseCase facturaUseCase;
   private final FacturaMapper facturaMapper;

   private final ActualizarFacturaUseCase actualizarFacturaUseCase;


    @GetMapping(path = "/path")
    public String commandName() {
//      return useCase.doAction();
        return "Hello World";
    }

    @PostMapping(path = "/creartiquete")
    public TiqueteDTO crearTiquete(@RequestBody TiqueteDTO tiqueteDTO) {
        Tiquete tiquete = tiqueteMapper.dtoToTiquete(tiqueteDTO);
        return tiqueteMapper.tiqueteToDto(tiqueteUseCase.crearTiquete(tiquete));
    }

    @PostMapping(path = "/crearfactura")
    public FacturaDTO crearFactura(@RequestBody FacturaDTO facturaDTO) {
        Factura factura = facturaMapper.dtoToFactura(facturaDTO);
        return facturaMapper.facturaToDto(facturaUseCase.crearFactura(factura));
    }

    @GetMapping(path = "/obtenerfacturas")
    public List<FacturaDTO> obtenerFacturas(@RequestBody FacturaDTO facturaDTO) {
        List<Factura> facturas = facturaUseCase.listarFacturas();
        return facturaMapper.fromFacturaList(facturas);
    }

    @GetMapping(path = "/obtenerfacturas/{id}")
    public FacturaDTO consultarFactura(@PathVariable("id") String id) {
        Factura factura = facturaUseCase.consultarFactura(id);
        return facturaMapper.facturaToDto(factura);
    }

    @PutMapping(path = "/actualizarfactura")
    public FacturaDTO consultarFactura(@RequestBody FacturaDTO facturaDTO) {
        Factura factura = facturaMapper.dtoToFactura(facturaDTO);
        return facturaMapper.facturaToDto(actualizarFacturaUseCase.updateCount(factura));
    }
}

package co.com.sofka.api;
import co.com.sofka.api.dto.FacturaDTO;
import co.com.sofka.api.dto.TiqueteDTO;
import co.com.sofka.api.mapper.FacturaMapper;
import co.com.sofka.api.mapper.TiqueteMapper;
import co.com.sofka.model.factura.Factura;
import co.com.sofka.model.factura.values.CanitdadMinutos;
import co.com.sofka.model.factura.values.EmpleadoId;
import co.com.sofka.model.factura.values.HoraSalida;
import co.com.sofka.model.tiquete.Tiquete;
import co.com.sofka.model.tiquete.values.HoraIngreso;
import co.com.sofka.usecase.factura.*;
import co.com.sofka.usecase.tiquete.TiqueteUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
   private final TiqueteUseCase tiqueteUseCase;
   private final TiqueteMapper tiqueteMapper;
   private final FacturaUseCase facturaUseCase;
   private final FacturaMapper facturaMapper;

   private final ActualizarFacturaUseCase actualizarFacturaUseCase;
   private final BorrarFacturaUseCase borrarFacturaUseCase;
   private final TiempoTotalFacturaUseCase tiempoTotalFacturaUseCase;
   private final BuscarFacturaPorEmpleadoIdUseCase buscarFacturaPorEmpleadoIdUseCase;
  // private final ListarFacturaUsecase listarFacturaUsecase;


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

    @GetMapping(path = "/cantidadminutos/{hi}/{hf}")
    public CanitdadMinutos canitdadMinutos(@PathVariable("hi") String hi,@PathVariable("hf") String hf ) {
        HoraIngreso horaIngreso = new HoraIngreso(hi);
        HoraSalida horaSalida = new HoraSalida(hf);
        CanitdadMinutos canitdadMinutos = facturaUseCase.canitdadMinutos(horaIngreso,horaSalida);
        CanitdadMinutos c = canitdadMinutos;
        return canitdadMinutos;
    }

    @GetMapping(path = "/obtenerfacturas")
    public List<FacturaDTO> obtenerFacturas() {
        List<Factura> facturas = facturaUseCase.listarFacturas();
        return facturaMapper.fromFacturaList(facturas);
    }

    @GetMapping(path = "/obtenerfactura/{id}")
    public FacturaDTO consultarFactura(@PathVariable("id") String id) {
        Factura factura = facturaUseCase.consultarFactura(id);
        return facturaMapper.facturaToDto(factura);
    }

    @GetMapping(path = "/obtenerFacturas/empleadoId/{id}")
    public List<FacturaDTO> obtenerFacturasEmpleadoId(@PathVariable("id")EmpleadoId empleadoId){
        List<Factura> facturas = buscarFacturaPorEmpleadoIdUseCase.findFacturaByEmpleadoId(empleadoId);
        return facturaMapper.fromFacturaList(facturas);
    }

    @PutMapping(path = "/actualizarfactura")
    public FacturaDTO actualizarFactura(@RequestBody FacturaDTO facturaDTO) {
        Factura factura = facturaMapper.dtoToFactura(facturaDTO);
        return facturaMapper.facturaToDto(actualizarFacturaUseCase.updateCount(factura));
    }

    @DeleteMapping(path = "/eliminarfactura/{id}")
    public void eliminarFactura(@PathVariable("id") String id) {
        borrarFacturaUseCase.deleteFactura(id);
    }
}

package com.soycivera.api.controller;

import com.soycivera.api.domain.factura.DatosListarFactura;
import com.soycivera.api.domain.factura.Factura;
import com.soycivera.api.domain.pago.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Date;

@RestController
@CrossOrigin
@RequestMapping("api/pago")
public class PagoController {
    @Autowired
    private PagoRepository pagoRepository;
    @PostMapping
    public ResponseEntity<DatosRespuestaPago> registrarPago(@RequestBody @Valid DatosRegistroPago datosRegistroPago, UriComponentsBuilder uriComponentsBuilder) {
        Pago pago = pagoRepository.save(new Pago(datosRegistroPago));
        DatosRespuestaPago datosRespuestaPago = new DatosRespuestaPago(
                pago.getId(),
                pago.getIdpaciente(),
                pago.getIdfactura(),
                pago.getCodigofactura(),
                pago.getCodigo_pago_text(),
                pago.getFechadate(),
                pago.getFacturadate(),
                pago.getValor_pago_double(),
                pago.getObservacionespago(),
                pago.getNombre_text(),
                pago.getDocumentodouble()

        );
        URI url = uriComponentsBuilder.path("/factura/{id}").buildAndExpand(pago.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaPago);
    }

    @GetMapping
    public ResponseEntity<Page<DatosListaPago>> listaPago(@PageableDefault(size = 10) Pageable paginacion){
        return ResponseEntity.ok(pagoRepository.findAll(paginacion).map(DatosListaPago::new));
    }

    @GetMapping("/fechas")
    public ResponseEntity<Page<DatosListaPago>> listaFacturaFecha(
            @RequestParam("fechaInicio") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaInicio,
            @RequestParam("fechaFin") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaFin,
            @RequestParam(value = "id", required = false) String id, // Marca como opcional
            @PageableDefault(size = 10, direction = Sort.Direction.ASC) Pageable paginacion) {

        Page<Pago> pagoPage;

        if (id != null && !id.isEmpty()) {
            // Si id no es null y no está vacío, consulta por id
            pagoPage = pagoRepository.findByFacturadateBetweenAndDocumentodouble(fechaInicio, fechaFin, id, paginacion);
        } else {
            // Si id es null o está vacío, consulta todos los registros
            pagoPage = pagoRepository.findByFacturadateBetween(fechaInicio, fechaFin, paginacion);
        }

        return ResponseEntity.ok(pagoPage.map(DatosListaPago::new));
    }

    @PutMapping
    @Transactional
    public  ResponseEntity  actualizarPago(@RequestBody DatosActualizarPago datosActualizarPago){
        Pago pago = pagoRepository.getReferenceById(datosActualizarPago.id());
        pago.actualizarDatos(datosActualizarPago);
        return ResponseEntity.ok(new DatosRespuestaPago(
                pago.getId(),
                pago.getIdpaciente(),
                pago.getIdfactura(),
                pago.getCodigofactura(),
                pago.getCodigo_pago_text(),
                pago.getFechadate(),
                pago.getFacturadate(),
                pago.getValor_pago_double(),
                pago.getObservacionespago(),
                pago.getNombre_text(),
                pago.getDocumentodouble()

        ));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarPago(@PathVariable Long id){
        Pago factura = pagoRepository.getReferenceById(id);
        pagoRepository.delete(factura);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosRespuestaPago> retornaDatosPago(@PathVariable Long id){
        Pago pago = pagoRepository.getReferenceById(id);
        var datosPago = new DatosRespuestaPago(
                pago.getId(),
                pago.getIdpaciente(),
                pago.getIdfactura(),
                pago.getCodigofactura(),
                pago.getCodigo_pago_text(),
                pago.getFechadate(),
                pago.getFacturadate(),
                pago.getValor_pago_double(),
                pago.getObservacionespago(),
                pago.getNombre_text(),
                pago.getDocumentodouble()
        );
        return ResponseEntity.ok(datosPago);
    }
        @GetMapping("/search/{documento}")
    public ResponseEntity<Page<DatosListaPago>> retornaDocumentoFactura(
            @PathVariable ("documento") String documento,
            @PageableDefault(size = 20,sort = "fechadate", direction = Sort.Direction.DESC) Pageable paginacion
    ){
        return ResponseEntity.ok(pagoRepository.findByDocumentodoubleContainingOrCodigofacturaContaining(documento,documento, paginacion).map(DatosListaPago::new));
    }

    @GetMapping("/factura/{idfactura}")
    public ResponseEntity<Page<DatosListaPago>> retornaIdPaciente(
            @PathVariable ("idfactura") String idfactura,
            @PageableDefault(size = 20,sort = "fechadate", direction = Sort.Direction.DESC) Pageable paginacion
    ){
        return ResponseEntity.ok(pagoRepository.findByIdfactura(idfactura, paginacion).map(DatosListaPago::new));
    }
}

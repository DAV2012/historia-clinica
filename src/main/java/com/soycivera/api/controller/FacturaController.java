package com.soycivera.api.controller;

import com.soycivera.api.domain.factura.*;
import com.soycivera.api.domain.paciente.DatosListaPaciente;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Date;

@Controller
@CrossOrigin
@RequestMapping("api/factura")
public class FacturaController {
    @Autowired
    private FacturaRepository facturaRepository;
    @PostMapping
    public ResponseEntity<DatosRespuestaFactura> registrarFactura(@RequestBody @Valid DatosRegistroFactura datosRegistroFactura, UriComponentsBuilder uriComponentsBuilder) {
        Factura factura = facturaRepository.save(new Factura(datosRegistroFactura));
        DatosRespuestaFactura datosRespuestaFactura = new DatosRespuestaFactura(
                factura.getId(),
                factura.getIdpaciente(),
                factura.getCodigofactura(),
                factura.getProcedimiento_text(),
                factura.getNumerofactura(),
                factura.getFacturadate(),
                factura.getTipodocumento_text(),
                factura.getDocumentodouble(),
                factura.getDescuento_double(),
                factura.getNombre_text(),
                factura.getObservaciones_text(),
                factura.getTotal_factura(),
                factura.getStatus()

        );
        URI url = uriComponentsBuilder.path("/factura/{id}").buildAndExpand(factura.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaFactura);
    }

    @GetMapping
    public ResponseEntity<Page<DatosListarFactura>> listaFactura(@PageableDefault(size = 10) Pageable paginacion){
        return ResponseEntity.ok(facturaRepository.findAll(paginacion).map(DatosListarFactura::new));
    }

    @GetMapping("/fechas")
    public ResponseEntity<Page<DatosListarFactura>> listaFacturaFecha(
            @RequestParam("fechaInicio") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaInicio,
            @RequestParam("fechaFin") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaFin,
            @RequestParam(value = "id", required = false) String id, // Marca como opcional
            @PageableDefault(size = 10, direction = Sort.Direction.ASC) Pageable paginacion) {

        Page<Factura> facturaPage;

        if (id != null && !id.isEmpty()) {
            // Si id no es null y no está vacío, consulta por id
            facturaPage = facturaRepository.findByFacturadateBetweenAndDocumentodouble(fechaInicio, fechaFin, id, paginacion);
        } else {
            // Si id es null o está vacío, consulta todos los registros
            facturaPage = facturaRepository.findByFacturadateBetween(fechaInicio, fechaFin, paginacion);
        }

        return ResponseEntity.ok(facturaPage.map(DatosListarFactura::new));
    }

    @PutMapping
    @Transactional
    public  ResponseEntity  actualizarFactura(@RequestBody DatosActualizarFactura datosActualizarFactura){
        Factura factura = facturaRepository.getReferenceById(datosActualizarFactura.id());
        factura.actualizarDatos(datosActualizarFactura);
        return ResponseEntity.ok(new DatosRespuestaFactura(
                factura.getId(),
                factura.getIdpaciente(),
                factura.getCodigofactura(),
                factura.getProcedimiento_text(),
                factura.getNumerofactura(),
                factura.getFacturadate(),
                factura.getTipodocumento_text(),
                factura.getDocumentodouble(),
                factura.getDescuento_double(),
                factura.getNombre_text(),
                factura.getObservaciones_text(),
                factura.getTotal_factura(),
                factura.getStatus()

        ));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarFactura(@PathVariable Long id){
        Factura factura = facturaRepository.getReferenceById(id);
        facturaRepository.delete(factura);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosRespuestaFactura> retornaDatosFactura(@PathVariable Long id){
        Factura factura = facturaRepository.getReferenceById(id);
        var datosFactura = new DatosRespuestaFactura(
                factura.getId(),
                factura.getIdpaciente(),
                factura.getCodigofactura(),
                factura.getProcedimiento_text(),
                factura.getNumerofactura(),
                factura.getFacturadate(),
                factura.getTipodocumento_text(),
                factura.getDocumentodouble(),
                factura.getDescuento_double(),
                factura.getNombre_text(),
                factura.getObservaciones_text(),
                factura.getTotal_factura(),
                factura.getStatus()
        );
        return ResponseEntity.ok(datosFactura);
    }
    @GetMapping("/id/{idpaciente}")
    public ResponseEntity<Page<DatosListarFactura>> listaFacturaIdpaciente(
            @PathVariable("idpaciente") String idpaciente,
            @PageableDefault(size = 4,sort = "id", direction = Sort.Direction.DESC) Pageable paginacion) {
        return ResponseEntity.ok(facturaRepository.findByIdpaciente(idpaciente, paginacion).map(DatosListarFactura::new));
    }

    @GetMapping("/documento/{documento}")
    public ResponseEntity<Page<DatosListarFactura>> listaFacturaDocumento(
            @PathVariable("documento") String documentodouble,
            @PageableDefault(size = 4,sort = "id", direction = Sort.Direction.DESC) Pageable paginacion) {
        return ResponseEntity.ok(facturaRepository.findByDocumentodoubleContainingOrCodigofacturaContaining(documentodouble,documentodouble, paginacion).map(DatosListarFactura::new));
    }
}

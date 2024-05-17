
package com.soycivera.api.controller;

import com.soycivera.api.domain.agenda.*;
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
@RequestMapping("api/agenda")
//@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*", allowCredentials = "true")
public class AgendaController {
    @Autowired
    private AgendaRepository agendaRepository;
    @PostMapping
    public ResponseEntity<DatosRespuestaAgenda> registrarAgenda(@RequestBody @Valid DatosRegistroAgenda datosRegistroAgenda, UriComponentsBuilder uriComponentsBuilder) {
        Agenda agenda = agendaRepository.save(new Agenda(datosRegistroAgenda));
        DatosRespuestaAgenda datosRespuestaAgenda = new DatosRespuestaAgenda(
                agenda.getId(),
                agenda.getIdpaciente(),
                agenda.getFechacitadate(),
                agenda.getHoratime(),
                agenda.getTipodocumento_text(),
                agenda.getDocumentodouble(),
                agenda.getNombre_text(),
                agenda.getTelefono_double(),
                agenda.getCorreo_email(),
                agenda.getProcedimiento_text(),
                agenda.getStatus_boolean(),
                agenda.getStatus_double(),
                agenda.getObservaciones_text()

        );
        URI url = uriComponentsBuilder.path("/factura/{id}").buildAndExpand(agenda.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaAgenda);
    }
    @GetMapping
    public ResponseEntity<Page<DatosListarAgenda>> listaAgenda(@PageableDefault(size = 5,sort = "fechacitadate", direction = Sort.Direction.DESC) Pageable paginacion){
        return ResponseEntity.ok(agendaRepository.findAll(paginacion).map(DatosListarAgenda::new));
    }

    @PutMapping
    @Transactional
    public  ResponseEntity  actualizarAgenda(@RequestBody DatosActualizarAgenda datosActualizarAgenda){
        Agenda agenda = agendaRepository.getReferenceById(datosActualizarAgenda.id());
        agenda.actualizarDatos(datosActualizarAgenda);
        return ResponseEntity.ok(new DatosActualizarAgenda(
                agenda.getId(),
                agenda.getIdpaciente(),
                agenda.getFechacitadate(),
                agenda.getHoratime(),
                agenda.getTipodocumento_text(),
                agenda.getDocumentodouble(),
                agenda.getNombre_text(),
                agenda.getTelefono_double(),
                agenda.getCorreo_email(),
                agenda.getProcedimiento_text(),
                agenda.getStatus_boolean(),
                agenda.getStatus_double(),
                agenda.getObservaciones_text()

                ));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarAgenda(@PathVariable Long id){
        Agenda agenda = agendaRepository.getReferenceById(id);
        agendaRepository.delete(agenda);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosActualizarAgenda> retornaDatosAgenda(@PathVariable Long id){
        Agenda agenda = agendaRepository.getReferenceById(id);
        var datosAgenda = new DatosActualizarAgenda(
                agenda.getId(),
                agenda.getIdpaciente(),
                agenda.getFechacitadate(),
                agenda.getHoratime(),
                agenda.getTipodocumento_text(),
                agenda.getDocumentodouble(),
                agenda.getNombre_text(),
                agenda.getTelefono_double(),
                agenda.getCorreo_email(),
                agenda.getProcedimiento_text(),
                agenda.getStatus_boolean(),
                agenda.getStatus_double(),
                agenda.getObservaciones_text()
        );
        return ResponseEntity.ok(datosAgenda);
    }

    @GetMapping("/fechas")
    public ResponseEntity<Page<DatosListarAgenda>> listaAgendaFecha(
            @RequestParam("fechaInicio") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaInicio,
            @RequestParam("fechaFin") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaFin,
            @RequestParam(value = "id", required = false) String id, // Marca como opcional
            @PageableDefault(size = 10, direction = Sort.Direction.ASC) Pageable paginacion) {

        Page<Agenda> agendaPage;

        if (id != null && !id.isEmpty()) {
            // Si id no es null y no está vacío, consulta por id
            agendaPage = agendaRepository.findByFechacitadateBetweenAndDocumentodouble(fechaInicio, fechaFin, id, paginacion);
        } else {
            // Si id es null o está vacío, consulta todos los registros
            agendaPage = agendaRepository.findByFechacitadateBetween(fechaInicio, fechaFin, paginacion);
        }

        return ResponseEntity.ok(agendaPage.map(DatosListarAgenda::new));
    }

    @GetMapping("/paciente/{id}")
    public ResponseEntity<Page<DatosListarAgenda>> listaAgendaFecha(
            @PathVariable("id")  String idpaciente,
            @PageableDefault(size = 10,sort = "fechacitadate", direction = Sort.Direction.DESC) Pageable paginacion) {
        return ResponseEntity.ok(agendaRepository.findByIdpaciente(idpaciente, paginacion).map(DatosListarAgenda::new));
    }
    @GetMapping("/documento/{documento}")
    public ResponseEntity<Page<DatosListarAgenda>> listaAgendaDocumento(
            @PathVariable("documento")  String documentodouble,
            @PageableDefault(size = 5,sort = "fechacitadate", direction = Sort.Direction.DESC) Pageable paginacion) {
        return ResponseEntity.ok(agendaRepository.findByDocumentodoubleContaining(documentodouble, paginacion).map(DatosListarAgenda::new));
    }

}


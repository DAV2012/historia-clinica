package com.soycivera.api.controller;

import com.soycivera.api.domain.agenda.DatosListarAgenda;
import com.soycivera.api.domain.paciente.*;
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
@RequestMapping("api/paciente")
public class PacienteController {
    @Autowired
    private PacienteRepository pacienteRepository;
    @PostMapping
    public ResponseEntity<DatosRespuestaPaciente> registrarPaciente(@RequestBody @Valid DatosRegistroPaciente datosRegistroPaciente, UriComponentsBuilder uriComponentsBuilder) {
        Paciente paciente = pacienteRepository.save(new Paciente(datosRegistroPaciente));
        DatosRespuestaPaciente datosRespuestaPaciente = new DatosRespuestaPaciente(
                paciente.getId(),
                paciente.getIdpaciente(),
                paciente.getNombre_text(),
                paciente.getDocumentodouble(),
                paciente.getCorreo_email(),
                paciente.getTelefono_double(),
                paciente.getTipodocumento_text(),
                paciente.getFachadate()

        );
        URI url = uriComponentsBuilder.path("/paciente/{id}").buildAndExpand(paciente.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaPaciente);
    }

    @GetMapping
    public ResponseEntity<Page<DatosListaPaciente>> listaPacientes(@PageableDefault(size = 5,sort = "id", direction = Sort.Direction.DESC) Pageable paginacion){
        return ResponseEntity.ok(pacienteRepository.findAll(paginacion).map(DatosListaPaciente::new));
    }
    @GetMapping("/fechas")
    public ResponseEntity<Page<DatosListaPaciente>> listaPacientesFecha(
            @RequestParam("fechaInicio") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaInicio,
            @RequestParam("fechaFin") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaFin,
            @PageableDefault(size = 10, direction = Sort.Direction.ASC) Pageable paginacion) {
        return ResponseEntity.ok(pacienteRepository.findByFachadateBetween(fechaInicio, fechaFin, paginacion).map(DatosListaPaciente::new));
    }

    @PutMapping
    @Transactional
    public  ResponseEntity  actualizarPaciente(@RequestBody DatosActualizarPaciente datosActualizarPaciente){
            Paciente paciente = pacienteRepository.getReferenceById(datosActualizarPaciente.id());
            paciente.actualizarDatos(datosActualizarPaciente);
            return ResponseEntity.ok(new DatosRespuestaPaciente(
                    paciente.getId(),
                    paciente.getIdpaciente(),
                    paciente.getNombre_text(),
                    paciente.getDocumentodouble(),
                    paciente.getCorreo_email(),
                    paciente.getTelefono_double(),
                    paciente.getTipodocumento_text(),
                    paciente.getFachadate()
            ));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarPaciente(@PathVariable Long id){
        Paciente paciente = pacienteRepository.getReferenceById(id);
        pacienteRepository.delete(paciente);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosRespuestaPaciente> retornaDatosPaciente(@PathVariable Long id){
        Paciente paciente = pacienteRepository.getReferenceById(id);
        var datosPaciente = new DatosRespuestaPaciente(
                paciente.getId(),
                paciente.getIdpaciente(),
                paciente.getNombre_text(),
                paciente.getDocumentodouble(),
                paciente.getTipodocumento_text(),
                paciente.getTelefono_double(),
                paciente.getCorreo_email(),
                paciente.getFachadate()
        );
        return ResponseEntity.ok(datosPaciente);
    }
    @GetMapping("/documento/{documento}")
    public ResponseEntity<Page<DatosListaPaciente>> retornaDocumento(
            @PathVariable ("documento") String documentodouble,
              @PageableDefault(size = 5,sort = "id", direction = Sort.Direction.DESC) Pageable paginacion
    ){
        return ResponseEntity.ok(pacienteRepository.findByDocumentodoubleContaining(documentodouble, paginacion).map(DatosListaPaciente::new));
    }
}



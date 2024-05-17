package com.soycivera.api.controller;

import com.soycivera.api.domain.agenda.DatosListarAgenda;
import com.soycivera.api.domain.factura.*;
import com.soycivera.api.domain.historiaclinica.*;
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
@RequestMapping("api/historia_clinica")
public class HistoriaClinicaController {
    @Autowired
    private HistoriaClinicaRepository historiaClinicaRespository;

    @PostMapping
    public ResponseEntity<DatosRespuestaHistoriaClinica> registrarHistoriaClinica(@RequestBody @Valid DatosRegistroHistoriaClinica datosRegistroHistoriaClinica, UriComponentsBuilder uriComponentsBuilder) {
        HistoriaClinica historiaClinica = historiaClinicaRespository.save(new HistoriaClinica(datosRegistroHistoriaClinica));
        DatosRespuestaHistoriaClinica datosRespuestaHistoriaClinica = new DatosRespuestaHistoriaClinica(
                historiaClinica.getId(),
                historiaClinica.getIdpaciente(),
                historiaClinica.getTipodocumento_text(),
                historiaClinica.getDocumentodouble(),
                historiaClinica.getNombre_text(),
                historiaClinica.getSexo_text(),
                historiaClinica.getFecha__nacimiento_date(),
                historiaClinica.getEstado_civil_text(),
                historiaClinica.getOcupacion_text(),
                historiaClinica.getBarrio_text(),
                historiaClinica.getCiudad_text(),
                historiaClinica.getDireccion_text(),
                historiaClinica.getTelefono_double(),
                historiaClinica.getFamiliar_text(),
                historiaClinica.getParentesco_text(),
                historiaClinica.getNacionalidad_text(),
                historiaClinica.getEdad_double(),
                historiaClinica.getCorreo_email(),
                historiaClinica.getRh_text(),
                historiaClinica.getEps_text(),
                historiaClinica.getMotivo_consulta(),
                historiaClinica.getComonosconoce(),
                historiaClinica.getEnfermedades_text(),
                historiaClinica.getMedicamento_boolean(),
                historiaClinica.getMedicamento_text(),
                historiaClinica.getOperacion_boolean(),
                historiaClinica.getOperacion_text(),
                historiaClinica.getImplante_medico_boolean(),
                historiaClinica.getPlanifica_boolean(),
                historiaClinica.getEmbarazo_double(),
                historiaClinica.getCesarea_double(),
                historiaClinica.getAborto_double(),
                historiaClinica.getPartos_double(),
                historiaClinica.getMarcapaso_boolean(),
                historiaClinica.getCiclo_regularidad_boolean(),
                historiaClinica.getCiclo_periodo_date(),
                historiaClinica.getParto_date(),
                historiaClinica.getFachadate(),
                historiaClinica.getPeso(),
                historiaClinica.getTalla(),
                historiaClinica.getImc(),
                historiaClinica.getGrasa(),
                historiaClinica.getSobrepeso(),
                historiaClinica.getAbdomen_alto(),
                historiaClinica.getAbdomen_bajo(),
                historiaClinica.getPierna_derecha(),
                historiaClinica.getPierna_izquierda(),
                historiaClinica.getCadera(),
                historiaClinica.getCintura(),
                historiaClinica.getBrazo_izquierdo(),
                historiaClinica.getBrazo_derecho(),
                historiaClinica.getPlan(),
                historiaClinica.getProcedimiento(),
                historiaClinica.getSeguimiento()

        );
        URI url = uriComponentsBuilder.path("/historia_clinica/{id}").buildAndExpand(historiaClinica.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaHistoriaClinica);
    }

    @GetMapping
    public ResponseEntity<Page<DatosListaHistoriaClinica>> listaHistoriaClinica(@PageableDefault(size = 5,sort = "id", direction = Sort.Direction.DESC) Pageable paginacion){
        return ResponseEntity.ok(historiaClinicaRespository.findAll(paginacion).map(DatosListaHistoriaClinica::new));
    }

    @PutMapping
    @Transactional
    public  ResponseEntity  actualizarHistoriaClinica(@RequestBody DatosActualizarHistoriaClinica datosActualizarHistoriaClinica){
        HistoriaClinica historiaClinica = historiaClinicaRespository.getReferenceById(datosActualizarHistoriaClinica.id());
        historiaClinica.actualizarDatos(datosActualizarHistoriaClinica);
        return ResponseEntity.ok(new DatosRespuestaHistoriaClinica(

                historiaClinica.getId(),
                historiaClinica.getIdpaciente(),
                historiaClinica.getTipodocumento_text(),
                historiaClinica.getDocumentodouble(),
                historiaClinica.getNombre_text(),
                historiaClinica.getSexo_text(),
                historiaClinica.getFecha__nacimiento_date(),
                historiaClinica.getEstado_civil_text(),
                historiaClinica.getOcupacion_text(),
                historiaClinica.getBarrio_text(),
                historiaClinica.getCiudad_text(),
                historiaClinica.getDireccion_text(),
                historiaClinica.getTelefono_double(),
                historiaClinica.getFamiliar_text(),
                historiaClinica.getParentesco_text(),
                historiaClinica.getNacionalidad_text(),
                historiaClinica.getEdad_double(),
                historiaClinica.getCorreo_email(),
                historiaClinica.getRh_text(),
                historiaClinica.getEps_text(),
                historiaClinica.getMotivo_consulta(),
                historiaClinica.getComonosconoce(),
                historiaClinica.getEnfermedades_text(),
                historiaClinica.getMedicamento_boolean(),
                historiaClinica.getMedicamento_text(),
                historiaClinica.getOperacion_boolean(),
                historiaClinica.getOperacion_text(),
                historiaClinica.getImplante_medico_boolean(),
                historiaClinica.getPlanifica_boolean(),
                historiaClinica.getEmbarazo_double(),
                historiaClinica.getCesarea_double(),
                historiaClinica.getAborto_double(),
                historiaClinica.getPartos_double(),
                historiaClinica.getMarcapaso_boolean(),
                historiaClinica.getCiclo_regularidad_boolean(),
                historiaClinica.getCiclo_periodo_date(),
                historiaClinica.getParto_date(),
                historiaClinica.getFachadate(),
                historiaClinica.getPeso(),
                historiaClinica.getTalla(),
                historiaClinica.getImc(),
                historiaClinica.getGrasa(),
                historiaClinica.getSobrepeso(),
                historiaClinica.getAbdomen_alto(),
                historiaClinica.getAbdomen_bajo(),
                historiaClinica.getPierna_derecha(),
                historiaClinica.getPierna_izquierda(),
                historiaClinica.getCadera(),
                historiaClinica.getCintura(),
                historiaClinica.getBrazo_izquierdo(),
                historiaClinica.getBrazo_derecho(),
                historiaClinica.getPlan(),
                historiaClinica.getProcedimiento(),
                historiaClinica.getSeguimiento()

        ));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarHistoriaClinica(@PathVariable Long id){
        HistoriaClinica historiaClinica = historiaClinicaRespository.getReferenceById(id);
        historiaClinicaRespository.delete(historiaClinica);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosRespuestaHistoriaClinica> retornaDatosHistoriaClinica(@PathVariable Long id){
        HistoriaClinica historiaClinica = historiaClinicaRespository.getReferenceById(id);
        var datosHistoriaClinica = new DatosRespuestaHistoriaClinica(
                historiaClinica.getId(),
                historiaClinica.getIdpaciente(),
                historiaClinica.getTipodocumento_text(),
                historiaClinica.getDocumentodouble(),
                historiaClinica.getNombre_text(),
                historiaClinica.getSexo_text(),
                historiaClinica.getFecha__nacimiento_date(),
                historiaClinica.getEstado_civil_text(),
                historiaClinica.getOcupacion_text(),
                historiaClinica.getBarrio_text(),
                historiaClinica.getCiudad_text(),
                historiaClinica.getDireccion_text(),
                historiaClinica.getTelefono_double(),
                historiaClinica.getFamiliar_text(),
                historiaClinica.getParentesco_text(),
                historiaClinica.getNacionalidad_text(),
                historiaClinica.getEdad_double(),
                historiaClinica.getCorreo_email(),
                historiaClinica.getRh_text(),
                historiaClinica.getEps_text(),
                historiaClinica.getMotivo_consulta(),
                historiaClinica.getComonosconoce(),
                historiaClinica.getEnfermedades_text(),
                historiaClinica.getMedicamento_boolean(),
                historiaClinica.getMedicamento_text(),
                historiaClinica.getOperacion_boolean(),
                historiaClinica.getOperacion_text(),
                historiaClinica.getImplante_medico_boolean(),
                historiaClinica.getPlanifica_boolean(),
                historiaClinica.getEmbarazo_double(),
                historiaClinica.getCesarea_double(),
                historiaClinica.getAborto_double(),
                historiaClinica.getPartos_double(),
                historiaClinica.getMarcapaso_boolean(),
                historiaClinica.getCiclo_regularidad_boolean(),
                historiaClinica.getCiclo_periodo_date(),
                historiaClinica.getParto_date(),
                historiaClinica.getFachadate(),
                historiaClinica.getPeso(),
                historiaClinica.getTalla(),
                historiaClinica.getImc(),
                historiaClinica.getGrasa(),
                historiaClinica.getSobrepeso(),
                historiaClinica.getAbdomen_alto(),
                historiaClinica.getAbdomen_bajo(),
                historiaClinica.getPierna_derecha(),
                historiaClinica.getPierna_izquierda(),
                historiaClinica.getCadera(),
                historiaClinica.getCintura(),
                historiaClinica.getBrazo_izquierdo(),
                historiaClinica.getBrazo_derecho(),
                historiaClinica.getPlan(),
                historiaClinica.getProcedimiento(),
                historiaClinica.getSeguimiento()
        );
        return ResponseEntity.ok(datosHistoriaClinica);
    }

    @GetMapping("/documento/{documento}")
    public ResponseEntity<Page<DatosListaHistoriaClinica>> listaHistoriaClinicaDocumento(
            @PathVariable("documento") String documentodouble,
            @PageableDefault(size = 10,sort = "id", direction = Sort.Direction.DESC) Pageable paginacion) {
        return ResponseEntity.ok(historiaClinicaRespository.findByDocumentodoubleContaining(documentodouble, paginacion).map(DatosListaHistoriaClinica::new));
    }
    @GetMapping("/id/{idpaciente}")
    public ResponseEntity<Page<DatosListaHistoriaClinica>> listaHistoriaClinicaIdpaciente(
            @PathVariable("idpaciente") String idpaciente,
            @PageableDefault(size = 10,sort = "id", direction = Sort.Direction.DESC) Pageable paginacion) {
        return ResponseEntity.ok(historiaClinicaRespository.findByIdpaciente(idpaciente, paginacion).map(DatosListaHistoriaClinica::new));
    }
}

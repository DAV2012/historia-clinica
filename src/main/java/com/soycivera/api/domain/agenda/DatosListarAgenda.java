
package com.soycivera.api.domain.agenda;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.Date;


public record DatosListarAgenda(
        @NotNull
        Long id,
        @NotBlank
        String idpaciente,
        @NotBlank
        Date fechacitadate,
        @NotBlank
        String horatime,
        @NotBlank
        String tipodocumento_text,
        @NotBlank
        String documentodouble,
        @NotBlank
        String nombre_text,
        @NotBlank
        String telefono_double,
        @NotBlank
        String correo_email,
        @NotBlank
        String procedimiento_text,
        @NotBlank
        Boolean status_boolean,
        @NotBlank
        BigDecimal status_double,
        @NotBlank
        String observaciones_text) {
    public DatosListarAgenda(Agenda agenda){
        this(
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
    }
}


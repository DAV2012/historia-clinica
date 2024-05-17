
package com.soycivera.api.domain.agenda;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.Date;


public record DatosActualizarAgenda(
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

        Boolean status_boolean,

        BigDecimal status_double,

        String observaciones_text
) {
}


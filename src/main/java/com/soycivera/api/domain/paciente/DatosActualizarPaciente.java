package com.soycivera.api.domain.paciente;

import jakarta.validation.constraints.NotNull;

public record DatosActualizarPaciente(
        @NotNull Long id,
        String idpaciente,
        String nombre_text,
        String tipodocumento_text,
        String documentodouble,
        String telefono_double,
        String correo_email
) {

}

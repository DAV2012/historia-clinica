package com.soycivera.api.domain.paciente;

import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record DatosRegistroPaciente(
        Long id,
        String idpaciente,
        String nombre_text,
        String documentodouble,
        String telefono_double,
        String correo_email,
        String tipodocumento_text,
        @NotNull
        Date fachadate
) {
}

package com.soycivera.api.domain.paciente;

import java.util.Date;

public record DatosRespuestaPaciente(
        Long id,
        String idpaciente,
        String nombre_text,
        String documentodouble,
        String tipodocumento_text,
        String telefono_double,
        String correo_email,
        Date
                fachadate
) {
}

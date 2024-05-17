
package com.soycivera.api.domain.agenda;

import java.math.BigDecimal;
import java.util.Date;


public record DatosRespuestaAgenda(

        Long id,
        String idpaciente,
        Date fechacitadate,
        String horatime,
        String tipodocumento_text,
        String documentoDouble,
        String nombre_text,
        String telefono_double,
        String correo_email,
        String procedimiento_text,
        Boolean status_boolean,
        BigDecimal status_double,
        String observaciones_text
) {
}


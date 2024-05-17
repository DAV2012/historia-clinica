

package com.soycivera.api.domain.agenda;

import java.math.BigDecimal;
import java.util.Date;


public record DatosRegistroAgenda(

        String idpaciente,
        Date fechacitadate,
        String horatime,
        String tipodocumento_text,
        String documentodouble,
        String nombre_text,
        String telefono_double,
        String correo_email,
        String procedimiento_text,
        Boolean status_boolean,
        BigDecimal status_double,
        String observaciones_text
) {
}



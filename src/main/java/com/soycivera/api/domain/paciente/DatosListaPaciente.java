package com.soycivera.api.domain.paciente;

import javax.xml.crypto.Data;
import java.util.Date;

public record DatosListaPaciente(
        Long id,
        String idpaciente,
        String nombre_text,
        String documentodouble,
        String tipodocumento_text,
        String telefono_double,
        String correo_email,
        Date fachadate

        ) {
    public DatosListaPaciente(Paciente paciente){
        this(
                paciente.getId(),
                paciente.getIdpaciente(),
                paciente.getNombre_text(),
                paciente.getDocumentodouble(),
                paciente.getTipodocumento_text(),
                paciente.getTelefono_double(),
                paciente.getCorreo_email(),
                paciente.getFachadate()
        );
    }
}

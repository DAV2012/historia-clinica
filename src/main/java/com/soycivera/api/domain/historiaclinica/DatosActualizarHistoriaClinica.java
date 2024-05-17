package com.soycivera.api.domain.historiaclinica;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record DatosActualizarHistoriaClinica(

        @NotNull
        Long id,
        @NotBlank
        String idpaciente,
        String tipodocumento_text,
        String documentodouble,
        String nombre_text,
        String sexo_text,
        Date fecha__nacimiento_date,
        String estado_civil_text,
        String ocupacion_text,
        String barrio_text,
        String ciudad_text,
        String direccion_text,
        String telefono_double,
        String familiar_text,
        String parentesco_text,
        String nacionalidad_text,
        Short  edad_double,
        String correo_email,
        String rh_text,
        String eps_text,
        String motivo_consulta,
        String comonosconoce,
        String enfermedades_text,
        Boolean medicamento_boolean,
        String medicamento_text,
        Boolean operacion_boolean,
        String operacion_text,
        Boolean implante_medico_boolean,
        Boolean planifica_boolean,
        Short  embarazo_double,
        Short cesarea_double,
        Short aborto_double,
        Short partos_double,
        Boolean marcapaso_boolean,
        Boolean ciclo_regularidad_boolean,
        Date ciclo_periodo_date,
        Date parto_date,
        String peso,
        String talla,
        String grasa,
        String imc,
        String sobrepeso,
        String abdomen_alto,
        String abdomen_bajo,
        String pierna_izquierda,
        String pierna_derecha,
        String cadera,
        String cintura,
        String brazo_izquierdo,
        String brazo_derecho,
        String plan,
        String procedimiento,
        String seguimiento
) {
}
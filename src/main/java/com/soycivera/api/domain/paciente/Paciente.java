package com.soycivera.api.domain.paciente;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Table(name="paciente")
@Entity(name = "Paciente")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String idpaciente;
    private String nombre_text;
    private String tipodocumento_text;
    private String documentodouble;
    private String telefono_double;
    private String correo_email;
    @Temporal(TemporalType.DATE)
    private Date fachadate;


    public Paciente(DatosRegistroPaciente datosRegistroPaciente) {
        this.idpaciente = datosRegistroPaciente.idpaciente();
        this.nombre_text = datosRegistroPaciente.nombre_text();
        this.documentodouble = datosRegistroPaciente.documentodouble();
        this.correo_email = datosRegistroPaciente.correo_email();
        this.telefono_double = datosRegistroPaciente.telefono_double();
        this.tipodocumento_text = datosRegistroPaciente.tipodocumento_text();
        this.fachadate= datosRegistroPaciente.fachadate();
    }

    public void actualizarDatos( DatosActualizarPaciente datosActualizarPaciente) {
        if (datosActualizarPaciente.nombre_text() != null){
            this.nombre_text = datosActualizarPaciente.nombre_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarPaciente.documentodouble() != null){
            this.documentodouble = datosActualizarPaciente.documentodouble(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarPaciente.correo_email() != null){
            this.correo_email = datosActualizarPaciente.correo_email(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarPaciente.telefono_double() != null){
            this.telefono_double = datosActualizarPaciente.telefono_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarPaciente.tipodocumento_text() != null){
            this.tipodocumento_text = datosActualizarPaciente.tipodocumento_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }

    }
}

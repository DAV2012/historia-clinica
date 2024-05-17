
package com.soycivera.api.domain.agenda;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Table(name="agenda")
@Entity(name = "Agenda")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Agenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String idpaciente;
    @Temporal(TemporalType.DATE)
    private Date fechacitadate;
    private String horatime;
    private String tipodocumento_text;
    private String documentodouble;
    private String nombre_text;
    private String telefono_double;
    private String correo_email;
    private String procedimiento_text;
    private Boolean status_boolean;
    private BigDecimal status_double;
    private String observaciones_text;

    public void actualizarDatos( DatosActualizarAgenda datosActualizarAgenda) {
        if (datosActualizarAgenda.fechacitadate() != null){
            this.fechacitadate = datosActualizarAgenda.fechacitadate(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.horatime() != null){
            this.horatime = datosActualizarAgenda.horatime(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.tipodocumento_text() != null){
            this.tipodocumento_text = datosActualizarAgenda.tipodocumento_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.documentodouble() != null){
            this.documentodouble = datosActualizarAgenda.documentodouble(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.nombre_text() != null){
            this.nombre_text = datosActualizarAgenda.nombre_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.telefono_double () != null){
            this.telefono_double  = datosActualizarAgenda.telefono_double (); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.procedimiento_text() != null){
            this.procedimiento_text = datosActualizarAgenda.procedimiento_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.correo_email() != null){
            this.correo_email = datosActualizarAgenda.correo_email(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.status_boolean() != null){
            this.status_boolean = datosActualizarAgenda.status_boolean(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.status_double() != null){
            this.status_double = datosActualizarAgenda.status_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.observaciones_text() != null){
            this.observaciones_text = datosActualizarAgenda.observaciones_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
    }

    public Agenda(DatosRegistroAgenda datosRegistroAgenda) {
        this.idpaciente = datosRegistroAgenda.idpaciente();
        this.fechacitadate = datosRegistroAgenda.fechacitadate();
        this.horatime = datosRegistroAgenda.horatime();
        this.tipodocumento_text = datosRegistroAgenda.tipodocumento_text();
        this.documentodouble = datosRegistroAgenda.documentodouble();
        this.nombre_text = datosRegistroAgenda.nombre_text();
        this.telefono_double = datosRegistroAgenda.telefono_double();
        this.correo_email = datosRegistroAgenda.correo_email();
        this.procedimiento_text = datosRegistroAgenda.procedimiento_text();
        this.status_boolean = datosRegistroAgenda.status_boolean();
        this.status_double = datosRegistroAgenda.status_double();
        this.observaciones_text = datosRegistroAgenda.observaciones_text();

    }
}


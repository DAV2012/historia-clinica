package com.soycivera.api.domain.historiaclinica;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Table(name="historia_clinica")
@Entity(name = "HistoriaClinica")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class HistoriaClinica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String idpaciente;
    private String tipodocumento_text;
    private String documentodouble;
    private String nombre_text;
    private String sexo_text;
    @Temporal(TemporalType.DATE)
    private Date fecha__nacimiento_date;
    private String estado_civil_text;
    private String ocupacion_text;
    private String barrio_text;
    private String ciudad_text;
    private String direccion_text;
    private String telefono_double;
    private String familiar_text;
    private String parentesco_text;
    private String nacionalidad_text;
    private Short edad_double;
    private String correo_email;
    private String rh_text;
    private String eps_text;
    private String motivo_consulta;
    private String comonosconoce;
    private String enfermedades_text;
    private Boolean medicamento_boolean;
    private String medicamento_text;
    private Boolean operacion_boolean;
    private String operacion_text;
    private Boolean implante_medico_boolean;
    private Boolean planifica_boolean;
    private Short embarazo_double;
    private Short cesarea_double;
    private Short aborto_double;
    private Short partos_double;
    private Boolean marcapaso_boolean;
    private Boolean ciclo_regularidad_boolean;
    @Temporal(TemporalType.DATE)
    private Date ciclo_periodo_date;
    @Temporal(TemporalType.DATE)
    private Date parto_date;
    @Temporal(TemporalType.DATE)
    private Date fachadate;
    private String peso;
    private String talla;
    private String imc;
    private String grasa;
    private String sobrepeso;
    private String abdomen_alto;
    private String abdomen_bajo;
    private String pierna_izquierda;
    private String pierna_derecha;
    private String cadera;
    private String cintura;
    private String brazo_izquierdo;
    private String brazo_derecho;
    private String plan;
    private String procedimiento;
    private String seguimiento;



    public void actualizarDatos( DatosActualizarHistoriaClinica datosActualizarHistoriaClinica) {
 ////Estos son los campos que puede actualizar los otsos no los to

        if (datosActualizarHistoriaClinica.tipodocumento_text() != null){
            this.tipodocumento_text = datosActualizarHistoriaClinica.tipodocumento_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.documentodouble() != null){
            this.documentodouble = datosActualizarHistoriaClinica.documentodouble(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.nombre_text() != null){
            this.nombre_text = datosActualizarHistoriaClinica.nombre_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.sexo_text() != null){
            this.sexo_text = datosActualizarHistoriaClinica.sexo_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.fecha__nacimiento_date () != null){
            this.fecha__nacimiento_date  = datosActualizarHistoriaClinica.fecha__nacimiento_date (); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.estado_civil_text() != null){
            this.estado_civil_text = datosActualizarHistoriaClinica.estado_civil_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.ocupacion_text() != null){
            this.ocupacion_text = datosActualizarHistoriaClinica.ocupacion_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.barrio_text() != null){
            this.barrio_text = datosActualizarHistoriaClinica.barrio_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }

        if (datosActualizarHistoriaClinica.ciudad_text() != null){
            this.ciudad_text = datosActualizarHistoriaClinica.ciudad_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.direccion_text() != null){
            this.direccion_text = datosActualizarHistoriaClinica.direccion_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.telefono_double() != null){
            this.telefono_double = datosActualizarHistoriaClinica.telefono_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.familiar_text() != null){
            this.familiar_text = datosActualizarHistoriaClinica.familiar_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.parentesco_text() != null){
            this.parentesco_text = datosActualizarHistoriaClinica.parentesco_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.nacionalidad_text() != null){
            this.nacionalidad_text = datosActualizarHistoriaClinica.nacionalidad_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.edad_double() != null){
            this.edad_double = datosActualizarHistoriaClinica.edad_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.correo_email() != null){
            this.correo_email = datosActualizarHistoriaClinica.correo_email(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.rh_text() != null){
            this.rh_text = datosActualizarHistoriaClinica.rh_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.eps_text() != null){
            this.eps_text = datosActualizarHistoriaClinica.eps_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.motivo_consulta() != null){
            this.motivo_consulta = datosActualizarHistoriaClinica.motivo_consulta(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.comonosconoce() != null){
            this.comonosconoce = datosActualizarHistoriaClinica.comonosconoce(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.enfermedades_text() != null){
            this.enfermedades_text = datosActualizarHistoriaClinica.enfermedades_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.medicamento_boolean() != null){
            this.medicamento_boolean = datosActualizarHistoriaClinica.medicamento_boolean(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.medicamento_text() != null){
            this.medicamento_text = datosActualizarHistoriaClinica.medicamento_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.operacion_boolean() != null){
            this.operacion_boolean = datosActualizarHistoriaClinica.operacion_boolean(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.operacion_text() != null){
            this.operacion_text = datosActualizarHistoriaClinica.operacion_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.implante_medico_boolean() != null){
            this.implante_medico_boolean = datosActualizarHistoriaClinica.implante_medico_boolean(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.planifica_boolean() != null){
            this.planifica_boolean = datosActualizarHistoriaClinica.planifica_boolean(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.embarazo_double() != null){
            this.embarazo_double = datosActualizarHistoriaClinica.embarazo_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.cesarea_double() != null){
            this.cesarea_double = datosActualizarHistoriaClinica.cesarea_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.aborto_double() != null){
            this.aborto_double = datosActualizarHistoriaClinica.aborto_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.partos_double() != null){
            this.partos_double = datosActualizarHistoriaClinica.partos_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.marcapaso_boolean() != null){
            this.marcapaso_boolean = datosActualizarHistoriaClinica.marcapaso_boolean(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.ciclo_regularidad_boolean() != null){
            this.ciclo_regularidad_boolean = datosActualizarHistoriaClinica.ciclo_regularidad_boolean(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.ciclo_periodo_date() != null){
            this.ciclo_periodo_date = datosActualizarHistoriaClinica.ciclo_periodo_date(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.parto_date() != null){
            this.parto_date = datosActualizarHistoriaClinica.parto_date(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.peso() != null){
            this.peso = datosActualizarHistoriaClinica.peso(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.talla() != null){
            this.talla = datosActualizarHistoriaClinica.talla(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.imc() != null){
            this.imc = datosActualizarHistoriaClinica.imc(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.grasa() != null){
            this.grasa = datosActualizarHistoriaClinica.grasa(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.sobrepeso() != null){
            this.sobrepeso = datosActualizarHistoriaClinica.sobrepeso(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.abdomen_alto() != null){
            this.abdomen_alto = datosActualizarHistoriaClinica.abdomen_alto(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.abdomen_bajo() != null){
            this.abdomen_bajo = datosActualizarHistoriaClinica.abdomen_bajo(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.pierna_izquierda() != null){
            this.pierna_izquierda = datosActualizarHistoriaClinica.pierna_izquierda(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.pierna_derecha() != null){
            this.pierna_derecha = datosActualizarHistoriaClinica.pierna_derecha(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.cadera() != null){
            this.cadera = datosActualizarHistoriaClinica.cadera(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.cintura() != null){
            this.cintura = datosActualizarHistoriaClinica.cintura(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.brazo_izquierdo() != null){
            this.brazo_izquierdo = datosActualizarHistoriaClinica.brazo_izquierdo(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.brazo_derecho() != null){
            this.brazo_derecho = datosActualizarHistoriaClinica.brazo_derecho(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.plan() != null){
            this.plan = datosActualizarHistoriaClinica.plan(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.procedimiento() != null){
            this.procedimiento = datosActualizarHistoriaClinica.procedimiento(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarHistoriaClinica.seguimiento() != null){
            this.seguimiento = datosActualizarHistoriaClinica.seguimiento(); ////Estos son los campos que puede actualizar los otsos no los to
        }
    }
    public HistoriaClinica(DatosRegistroHistoriaClinica datosRegistroHistoriaClinica) {
        this.idpaciente =datosRegistroHistoriaClinica.idpaciente();
        this.tipodocumento_text = datosRegistroHistoriaClinica.tipodocumento_text();
        this.documentodouble = datosRegistroHistoriaClinica.documentodouble();
        this.nombre_text = datosRegistroHistoriaClinica.nombre_text();
        this.sexo_text = datosRegistroHistoriaClinica.sexo_text();
        this.fecha__nacimiento_date = datosRegistroHistoriaClinica.fecha__nacimiento_date();
        this.estado_civil_text = datosRegistroHistoriaClinica.estado_civil_text();
        this.ocupacion_text = datosRegistroHistoriaClinica.ocupacion_text();
        this.barrio_text = datosRegistroHistoriaClinica.barrio_text();
        this.ciudad_text = datosRegistroHistoriaClinica.ciudad_text();
        this.direccion_text = datosRegistroHistoriaClinica.direccion_text();
        this.telefono_double = datosRegistroHistoriaClinica.telefono_double();
        this.familiar_text = datosRegistroHistoriaClinica.familiar_text();
        this.parentesco_text = datosRegistroHistoriaClinica.parentesco_text();
        this.nacionalidad_text = datosRegistroHistoriaClinica.nacionalidad_text();
        this.edad_double = datosRegistroHistoriaClinica .edad_double();
        this.correo_email = datosRegistroHistoriaClinica.correo_email();
        this.rh_text = datosRegistroHistoriaClinica.rh_text();
        this.eps_text = datosRegistroHistoriaClinica.eps_text();
        this.motivo_consulta = datosRegistroHistoriaClinica.motivo_consulta();
        this.comonosconoce = datosRegistroHistoriaClinica.comonosconoce();
        this.enfermedades_text = datosRegistroHistoriaClinica.enfermedades_text();
        this.medicamento_boolean = datosRegistroHistoriaClinica.medicamento_boolean();
        this.medicamento_text = datosRegistroHistoriaClinica.medicamento_text();
        this.operacion_boolean = datosRegistroHistoriaClinica.operacion_boolean();
        this.operacion_text = datosRegistroHistoriaClinica.operacion_text();
        this.implante_medico_boolean = datosRegistroHistoriaClinica.implante_medico_boolean();
        this.planifica_boolean = datosRegistroHistoriaClinica.planifica_boolean();
        this.embarazo_double = datosRegistroHistoriaClinica .embarazo_double();
        this.cesarea_double = datosRegistroHistoriaClinica.cesarea_double();
        this.aborto_double = datosRegistroHistoriaClinica.aborto_double();
        this.partos_double = datosRegistroHistoriaClinica.partos_double();
        this.marcapaso_boolean = datosRegistroHistoriaClinica.marcapaso_boolean();
        this.ciclo_regularidad_boolean = datosRegistroHistoriaClinica.ciclo_regularidad_boolean();
        this.ciclo_periodo_date = datosRegistroHistoriaClinica.ciclo_periodo_date();
        this.parto_date = datosRegistroHistoriaClinica.parto_date();
        this.fachadate= datosRegistroHistoriaClinica.fachadate();
        this.peso = datosRegistroHistoriaClinica.peso();
        this.talla = datosRegistroHistoriaClinica.talla();
        this.imc = datosRegistroHistoriaClinica.imc();
        this.grasa = datosRegistroHistoriaClinica.grasa();
        this.sobrepeso = datosRegistroHistoriaClinica.sobrepeso();
        this.abdomen_alto = datosRegistroHistoriaClinica.abdomen_alto();
        this.abdomen_bajo = datosRegistroHistoriaClinica.abdomen_bajo();
        this.pierna_izquierda = datosRegistroHistoriaClinica.pierna_izquierda();
        this.pierna_derecha = datosRegistroHistoriaClinica.pierna_derecha();
        this.cadera = datosRegistroHistoriaClinica.cadera();
        this.cintura = datosRegistroHistoriaClinica.cintura();
        this.brazo_izquierdo = datosRegistroHistoriaClinica.brazo_izquierdo();
        this.brazo_derecho = datosRegistroHistoriaClinica.brazo_derecho();
        this.plan = datosRegistroHistoriaClinica.plan();
        this.procedimiento = datosRegistroHistoriaClinica.procedimiento();
        this.seguimiento = datosRegistroHistoriaClinica.seguimiento();

    }
}

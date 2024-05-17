package com.soycivera.api.domain.factura;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;


@Table(name="factura")
@Entity(name = "Factura")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String idpaciente;
    private String codigofactura;
    private String procedimiento_text;
    private String numerofactura;
    @Temporal(TemporalType.DATE)
    private Date facturadate;
    private String tipodocumento_text;
    private String documentodouble;
    private BigDecimal descuento_double;
    private String nombre_text;
    private String observaciones_text;
    private BigDecimal total_factura;
    private Boolean status;
    public Factura(DatosRegistroFactura datosRegistroFactura) {
        this.idpaciente = datosRegistroFactura.idpaciente();
        this.codigofactura = datosRegistroFactura.codigofactura();
        this.procedimiento_text = datosRegistroFactura.procedimiento_text();
        this.numerofactura = datosRegistroFactura.numerofactura();
        this.facturadate = datosRegistroFactura.facturadate();
        this.tipodocumento_text = datosRegistroFactura.tipodocumento_text();
        this.documentodouble = datosRegistroFactura.documentodouble();
        this.descuento_double = datosRegistroFactura.descuento_double();
        this.nombre_text = datosRegistroFactura.nombre_text();
        this.observaciones_text = datosRegistroFactura.observaciones_text();
        this.total_factura = datosRegistroFactura.total_factura();
        this.status = datosRegistroFactura.status();
    }
    public void actualizarDatos( DatosActualizarFactura datosActualizarFactura) {
        if (datosActualizarFactura.procedimiento_text() != null){
            this.procedimiento_text = datosActualizarFactura.procedimiento_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.numerofactura() != null){
            this.numerofactura = datosActualizarFactura.numerofactura(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.tipodocumento_text() != null){
            this.tipodocumento_text = datosActualizarFactura.tipodocumento_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.documentodouble() != null){
            this.documentodouble = datosActualizarFactura.documentodouble(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.descuento_double() != null){
            this.descuento_double = datosActualizarFactura.descuento_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.nombre_text () != null){
            this.nombre_text  = datosActualizarFactura.nombre_text (); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.observaciones_text() != null){
            this.observaciones_text = datosActualizarFactura.observaciones_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.total_factura() != null){
            this.total_factura = datosActualizarFactura.total_factura(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarFactura.status() != null){
            this.status = datosActualizarFactura.status(); ////Estos son los campos que puede actualizar los otsos no los to
        }
    }

}

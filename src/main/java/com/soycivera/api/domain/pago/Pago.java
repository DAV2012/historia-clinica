
package com.soycivera.api.domain.pago;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Table(name="pago")
@Entity(name = "Pago")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Pago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String idpaciente;
    private String idfactura;
    private String codigofactura;
    private String codigo_pago_text;
    @Temporal(TemporalType.DATE)
    private Date fechadate;
    @Temporal(TemporalType.DATE)
    private Date facturadate;
    private BigDecimal valor_pago_double;
    private String observacionespago;
    private String nombre_text;
    private String documentodouble;


 public Pago(DatosRegistroPago datosRegistroPago) {

     this.idpaciente = datosRegistroPago.idpaciente();
     this.idfactura = datosRegistroPago.idfactura();
     this.codigo_pago_text = datosRegistroPago.codigo_pago_text();
     this.fechadate = datosRegistroPago.fechadate();
     this.facturadate = datosRegistroPago.facturadate();
     this.valor_pago_double = datosRegistroPago.valor_pago_double();
     this.observacionespago = datosRegistroPago.observacionespago();
     this.nombre_text = datosRegistroPago.nombre_text();
     this.documentodouble = datosRegistroPago.documentodouble();
     this.codigofactura = datosRegistroPago.codigofactura();
 }

    public void actualizarDatos( DatosActualizarPago datosActualizarAgenda) {
        if (datosActualizarAgenda.idfactura() != null) {
            this.idfactura = datosActualizarAgenda.idfactura(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.codigo_pago_text() != null) {
            this.codigo_pago_text = datosActualizarAgenda.codigo_pago_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.valor_pago_double() != null) {
            this.valor_pago_double = datosActualizarAgenda.valor_pago_double(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.observacionespago() != null) {
            this.observacionespago = datosActualizarAgenda.observacionespago(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.nombre_text() != null) {
            this.nombre_text = datosActualizarAgenda.nombre_text(); ////Estos son los campos que puede actualizar los otsos no los to
        }
        if (datosActualizarAgenda.documentodouble() != null) {
            this.documentodouble = datosActualizarAgenda.documentodouble(); ////Estos son los campos que puede actualizar los otsos no los to
        }
    }
}


package com.soycivera.api.domain.factura;

import java.math.BigDecimal;
import java.util.Date;


public record DatosListarFactura(
        Long id,
        String idpaciente,
        String codigofactura,
        String procedimiento_text,
        String numerofactura,
        Date facturadate,
        String tipodocumento_text,
        String documentodouble,
        BigDecimal descuento_double,
        String nombre_text,
        String observaciones_text,
        BigDecimal total_factura,
        Boolean status
) {

    public DatosListarFactura(Factura factura){
        this(
                factura.getId(),
                factura.getIdpaciente(),
                factura.getCodigofactura(),
                factura.getProcedimiento_text(),
                factura.getNumerofactura(),
                factura.getFacturadate(),
                factura.getTipodocumento_text(),
                factura.getDocumentodouble(),
                factura.getDescuento_double(),
                factura.getNombre_text(),
                factura.getObservaciones_text(),
                factura.getTotal_factura(),
                factura.getStatus()
        );
    }
}

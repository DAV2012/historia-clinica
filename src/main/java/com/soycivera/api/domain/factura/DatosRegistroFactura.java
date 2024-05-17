package com.soycivera.api.domain.factura;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.Date;

public record DatosRegistroFactura(

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
        @NotNull
        BigDecimal total_factura,
        Boolean status
) {
}

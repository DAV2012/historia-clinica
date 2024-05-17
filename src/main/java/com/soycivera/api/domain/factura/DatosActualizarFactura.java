package com.soycivera.api.domain.factura;

import java.math.BigDecimal;
import java.util.Date;

public record DatosActualizarFactura(
        Long id,
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
}

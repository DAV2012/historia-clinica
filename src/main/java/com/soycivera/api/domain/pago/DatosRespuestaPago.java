package com.soycivera.api.domain.pago;

import java.math.BigDecimal;
import java.util.Date;

public record DatosRespuestaPago(

        Long id,
        String idpaciente,
        String idfactura,
        String codigofactura,

        String codigo_pago_text,
        Date fechadate,
        Date facturadate,
        BigDecimal valor_pago_double,
        String observacionespago,
        String nombre_text,
        String documentodouble
) {
}

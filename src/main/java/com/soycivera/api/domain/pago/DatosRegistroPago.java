package com.soycivera.api.domain.pago;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.Date;

public record DatosRegistroPago(


        @NotBlank
        String idpaciente,
        @NotBlank
        String idfactura,
        String codigofactura,

        String codigo_pago_text,

        Date fechadate,
        Date facturadate,
        @NotNull
        BigDecimal valor_pago_double,
        String observacionespago,
        @NotBlank
        String nombre_text,
        @NotBlank
        String documentodouble
) {
}

package com.soycivera.api.domain.pago;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.Date;

public record DatosActualizarPago(
        @NotNull
        Long id,
        @NotBlank
        String idpaciente,
        @NotBlank
        String idfactura,

        String codigo_pago_text,
        @NotNull
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

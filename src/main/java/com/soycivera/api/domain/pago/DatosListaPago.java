package com.soycivera.api.domain.pago;



import java.math.BigDecimal;
import java.util.Date;

public record DatosListaPago(

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
    public DatosListaPago(Pago pago){
        this(
                pago.getId(),
                pago.getIdpaciente(),
                pago.getIdfactura(),
                pago.getCodigofactura(),
                pago.getCodigo_pago_text(),
                pago.getFechadate(),
                pago.getFacturadate(),
                pago.getValor_pago_double(),
                pago.getObservacionespago(),
                pago.getNombre_text(),
                pago.getDocumentodouble()

                );
    }
}

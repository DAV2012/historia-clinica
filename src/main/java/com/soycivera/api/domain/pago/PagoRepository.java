
package com.soycivera.api.domain.pago;

import com.soycivera.api.domain.factura.Factura;
import com.soycivera.api.domain.paciente.Paciente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface PagoRepository extends JpaRepository<Pago,Long> {
    Page<Pago> findByDocumentodoubleContainingOrCodigofacturaContaining(String documentodoble,String codigofactura, Pageable pageable);
    Page<Pago> findByIdfactura(String idpaciente, Pageable pageable);
    Page<Pago> findByFacturadateBetweenAndDocumentodouble(Date fechaInicio, Date fechaFin, String id, Pageable pageable);
    Page<Pago> findByFacturadateBetween(Date fechaInicio, Date fechaFin, Pageable pageable);
}


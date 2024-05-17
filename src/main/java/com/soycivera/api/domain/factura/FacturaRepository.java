package com.soycivera.api.domain.factura;

import com.soycivera.api.domain.paciente.Paciente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;


public interface FacturaRepository extends JpaRepository<Factura, Long> {

    Page<Factura> findByIdpaciente(String idpaciente, Pageable pageable);
    Page<Factura> findByDocumentodoubleContainingOrCodigofacturaContaining(String documentodoble,String codigofactura, Pageable pageable);
    Page<Factura> findByFacturadateBetweenAndDocumentodouble(Date fechaInicio, Date fechaFin, String id, Pageable pageable);
    Page<Factura> findByFacturadateBetween(Date fechaInicio, Date fechaFin, Pageable pageable);
}

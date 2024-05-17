
package com.soycivera.api.domain.agenda;


import com.soycivera.api.domain.factura.Factura;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;


public interface AgendaRepository extends JpaRepository<Agenda,Long> {
    Page<Agenda> findByFechacitadate(Date fechacitadate, Pageable pageable);
    Page<Agenda> findByFechacitadateBetweenAndDocumentodouble(Date fechaInicio, Date fechaFin, String id, Pageable pageable);
    Page<Agenda> findByFechacitadateBetween(Date fechaInicio, Date fechaFin, Pageable pageable);
    Page<Agenda> findByIdpaciente(String idpaciente, Pageable pageable);
    Page<Agenda> findByDocumentodoubleContaining(String documentodouble, Pageable pageable);
}


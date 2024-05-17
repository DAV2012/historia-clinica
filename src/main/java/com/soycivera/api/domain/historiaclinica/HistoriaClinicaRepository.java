package com.soycivera.api.domain.historiaclinica;

import com.soycivera.api.domain.agenda.Agenda;
import com.soycivera.api.domain.factura.Factura;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.w3c.dom.DOMStringList;

import java.util.Date;

public interface HistoriaClinicaRepository extends JpaRepository<HistoriaClinica, Long> {
    Page<HistoriaClinica> findByDocumentodoubleContaining(String documentodouble, Pageable pageable);
    Page<HistoriaClinica> findByIdpaciente(String idpaciente, Pageable pageable);
}

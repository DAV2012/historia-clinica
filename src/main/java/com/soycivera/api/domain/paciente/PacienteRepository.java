package com.soycivera.api.domain.paciente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    Page<Paciente> findByDocumentodoubleContaining(String documentodo, Pageable pageable);
    Page<Paciente> findByFachadateBetween(Date fechaInicio, Date fechaFin, Pageable pageable);
}

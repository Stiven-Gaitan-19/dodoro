package co.edu.utadeo.dodoro.repository;

import co.edu.utadeo.dodoro.domain.Artefact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtefactRepository extends JpaRepository<Artefact, Integer> {
}

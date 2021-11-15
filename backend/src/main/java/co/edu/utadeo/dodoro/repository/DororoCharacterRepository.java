package co.edu.utadeo.dodoro.repository;

import co.edu.utadeo.dodoro.domain.DororoCharacter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DororoCharacterRepository extends JpaRepository<DororoCharacter, Integer> {
}

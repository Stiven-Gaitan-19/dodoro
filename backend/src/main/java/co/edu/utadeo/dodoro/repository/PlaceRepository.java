package co.edu.utadeo.dodoro.repository;

import co.edu.utadeo.dodoro.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, Integer> {
}

package co.edu.utadeo.dodoro.repository;

import co.edu.utadeo.dodoro.domain.BodyPart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BodyPartRepository extends JpaRepository<BodyPart, Integer> {

}

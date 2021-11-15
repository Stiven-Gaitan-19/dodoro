package co.edu.utadeo.dodoro.repository;

import co.edu.utadeo.dodoro.domain.Fight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FightRepository extends JpaRepository<Fight, Integer> {
}

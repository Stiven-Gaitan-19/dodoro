package co.edu.utadeo.dodoro.repository;

import co.edu.utadeo.dodoro.domain.Demon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DemonRepository extends JpaRepository<Demon, Integer> {

    @Query("select d from Demon d where d.place.id = ?1")
    List<Demon> findByPlaceById(Integer id);

    @Query("select d from Demon d where d.defeat = true")
    List<Demon> findByDefeated();
}

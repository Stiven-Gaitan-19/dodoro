package co.edu.utadeo.dodoro.service;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public class EntityService<E> {

    protected JpaRepository<E, Integer> repository;

    public EntityService(JpaRepository repository){
        this.repository = repository;
    }

    public E save(E entity) throws Exception {
        return repository.save(entity);
    }

    public List<E> getAll(){
        return repository.findAll();
    }

    public E getOne(Integer id) throws Exception {
        Optional<E> result = repository.findById(id);
        if(!result.isPresent()){
            throw new Exception("Entity with id"+id+" not exits.");
        }
        return result.get();
    }

    public void deleteOne(Integer id) throws Exception {
        repository.deleteById(id);
    }

}

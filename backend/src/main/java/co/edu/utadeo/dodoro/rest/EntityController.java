package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.service.EntityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

public class EntityController<E> {

    protected EntityService<E> service;

    EntityController(EntityService service){
        this.service = service;
    }

    @PostMapping()
    public E create(@RequestBody E entity) throws Exception {
        return service.save(entity);
    }

    @GetMapping()
    public List<E> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public E getByID(@PathVariable Integer id) throws Exception {
        return service.getOne(id);
    }

    @DeleteMapping("/{id}")
    public void deleteByID(@PathVariable Integer id) throws Exception {
        service.deleteOne(id);
    }
}

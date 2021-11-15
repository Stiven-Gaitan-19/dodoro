package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.Demon;
import co.edu.utadeo.dodoro.repository.DemonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DemonService extends EntityService<Demon>{

    private DemonRepository demonRepository;

    public DemonService(DemonRepository repository) {
        super(repository);
        demonRepository = repository;
    }

    public List<Demon> getDemonByPlaceId(Integer id){
        return demonRepository.findByPlaceById(id);
    }

    public List<Demon> getDemonsDefeated(){
        return demonRepository.findByDefeated();
    }
}

package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.Demon;
import co.edu.utadeo.dodoro.domain.Fight;
import co.edu.utadeo.dodoro.repository.DemonRepository;
import co.edu.utadeo.dodoro.repository.FightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class FightService extends EntityService<Fight>{

    @Autowired
    private DemonRepository demonRepository;

    public FightService(FightRepository repository) {
        super(repository);
    }

    @Override
    public List<Fight> getAll() {
        List<Fight> fights = repository.findAll();
        Collections.reverse(fights);
        return fights;
    }
}

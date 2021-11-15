package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.Power;
import co.edu.utadeo.dodoro.repository.PowerRepository;
import org.springframework.stereotype.Service;

@Service
public class PowerService extends EntityService<Power> {

    public PowerService(PowerRepository repository) {
        super(repository);
    }
}

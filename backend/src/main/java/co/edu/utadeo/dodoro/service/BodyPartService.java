package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.BodyPart;
import co.edu.utadeo.dodoro.repository.BodyPartRepository;
import org.springframework.stereotype.Service;

@Service
public class BodyPartService extends EntityService<BodyPart> {

    private BodyPartRepository bodyPartRepository;

    public BodyPartService(BodyPartRepository repository) {
        super(repository);
        this.bodyPartRepository = repository;
    }
}

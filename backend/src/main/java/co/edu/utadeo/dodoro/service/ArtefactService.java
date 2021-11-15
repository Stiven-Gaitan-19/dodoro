package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.Artefact;
import co.edu.utadeo.dodoro.repository.ArtefactRepository;
import org.springframework.stereotype.Service;

@Service
public class ArtefactService extends EntityService<Artefact>{

    public ArtefactService(ArtefactRepository repository) {
        super(repository);
    }
}

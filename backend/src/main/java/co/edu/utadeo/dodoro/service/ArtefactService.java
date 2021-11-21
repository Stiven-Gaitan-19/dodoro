package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.Artefact;
import co.edu.utadeo.dodoro.repository.ArtefactRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtefactService extends EntityService<Artefact>{

    private ArtefactRepository artefactRepository;

    public ArtefactService(ArtefactRepository repository) {
        super(repository);
        this.artefactRepository = repository;
    }

    public List<Artefact> saveAll(List<Artefact> artefacts){
        return artefactRepository.saveAll(artefacts);
    }

    public void removeAll(List<Integer> ids){
        artefactRepository.deleteAllById(ids);
    }
}

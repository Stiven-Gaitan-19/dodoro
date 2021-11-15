package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.DororoCharacter;
import co.edu.utadeo.dodoro.repository.DororoCharacterRepository;
import org.springframework.stereotype.Service;

@Service
public class DororoCharacterService extends EntityService<DororoCharacter>{

    public DororoCharacterService(DororoCharacterRepository repository) {
        super(repository);
    }
}

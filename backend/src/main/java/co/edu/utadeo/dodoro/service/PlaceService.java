package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.Place;
import co.edu.utadeo.dodoro.repository.PlaceRepository;
import org.springframework.stereotype.Service;

@Service
public class PlaceService extends EntityService<Place>{

    public PlaceService(PlaceRepository repository) {
        super(repository);
    }
}

package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.Place;
import co.edu.utadeo.dodoro.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlaceService extends EntityService<Place>{

    @Autowired
    private FileService fileService;

    public PlaceService(PlaceRepository repository) {
        super(repository);
    }

    @Override
    public void deleteOne(Integer id) throws Exception {
        Place place = getOne(id);
        fileService.deleteFile(place.getImageUrl());
        super.deleteOne(id);
    }
}

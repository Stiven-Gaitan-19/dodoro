package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.Place;
import co.edu.utadeo.dodoro.service.PlaceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/places")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PlaceController extends EntityController<Place> {

    PlaceController(PlaceService service) {
        super(service);
    }

    @PutMapping("/{id}")
    public Place createArtefact(@RequestBody Place place, @PathVariable Integer id) throws Exception {
        Place result = service.getOne(id);
        result.setName(place.getName());
        result.setImageUrl(place.getImageUrl());
        return service.save(result);
    }
}

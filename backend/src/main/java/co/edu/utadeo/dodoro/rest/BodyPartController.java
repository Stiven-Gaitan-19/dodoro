package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.BodyPart;
import co.edu.utadeo.dodoro.service.BodyPartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/body-parts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BodyPartController extends EntityController<BodyPart> {

    BodyPartController(BodyPartService service) {
        super(service);
    }

    @PutMapping("/{id}")
    public BodyPart createArtefact(@RequestBody BodyPart bodyPart, @PathVariable Integer id) throws Exception {
        BodyPart result = service.getOne(id);
        result.setName(bodyPart.getName());
        return service.save(result);
    }

}

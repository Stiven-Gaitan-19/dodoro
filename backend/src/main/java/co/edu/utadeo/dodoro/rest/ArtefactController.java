package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.Artefact;
import co.edu.utadeo.dodoro.service.ArtefactService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/artefacts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ArtefactController extends EntityController<Artefact> {

    ArtefactController(ArtefactService service) {
        super(service);
    }

    @PutMapping("/{id}")
    public Artefact createArtefact(@RequestBody Artefact artefact, @PathVariable Integer id) throws Exception {
        Artefact result = service.getOne(id);
        result.setName(artefact.getName());
        result.setOrigin(artefact.getOrigin());
        return service.save(result);
    }
}

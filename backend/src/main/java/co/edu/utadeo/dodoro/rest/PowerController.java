package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.Power;
import co.edu.utadeo.dodoro.service.PowerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/powers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PowerController extends EntityController<Power> {

    PowerController(PowerService service) {
        super(service);
    }

    @PutMapping("/{id}")
    public Power createArtefact(@RequestBody Power artefact, @PathVariable Integer id) throws Exception {
        Power result = service.getOne(id);
        result.setDescription(artefact.getDescription());
        return service.save(result);
    }
}

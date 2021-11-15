package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.DororoCharacter;
import co.edu.utadeo.dodoro.service.DororoCharacterService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/characters")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DororoCharacterController extends EntityController<DororoCharacter>{

    DororoCharacterController(DororoCharacterService service) {
        super(service);
    }

    @PutMapping("/{id}")
    public DororoCharacter createArtefact(@RequestBody DororoCharacter dororoCharacter, @PathVariable Integer id) throws Exception {
        DororoCharacter result = service.getOne(id);
        result.setName(dororoCharacter.getName());
        result.setImageUrl(dororoCharacter.getImageUrl());
        result.setGender(dororoCharacter.getGender());
        return service.save(result);
    }
}

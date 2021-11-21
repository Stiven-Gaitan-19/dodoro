package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.Artefact;
import co.edu.utadeo.dodoro.domain.DororoCharacter;
import co.edu.utadeo.dodoro.service.ArtefactService;
import co.edu.utadeo.dodoro.service.DororoCharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artefacts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ArtefactController extends EntityController<Artefact> {

    private ArtefactService artefactService;

    @Autowired
    private DororoCharacterService dororoCharacterService;

    ArtefactController(ArtefactService service) {
        super(service);
        this.artefactService = service;
    }

    @PutMapping("/{id}")
    public Artefact createArtefact(@RequestBody Artefact artefact, @PathVariable Integer id) throws Exception {
        Artefact result = service.getOne(id);
        result.setName(artefact.getName());
        result.setOrigin(artefact.getOrigin());
        return service.save(result);
    }

    @PostMapping("/all")
    public ResponseEntity<?> createArtefacts(@RequestBody List<Artefact> artefacts) throws Exception {
        DororoCharacter character = dororoCharacterService.getOne(1);
        artefacts.forEach(item -> item.setDororoCharacter(character));
        List<Artefact> result = this.artefactService.saveAll(artefacts);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @DeleteMapping("/all")
    public ResponseEntity<?> deleteArtefacts(@RequestBody List<Integer> ids){
        this.artefactService.removeAll(ids);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}

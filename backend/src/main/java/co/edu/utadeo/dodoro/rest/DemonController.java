package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.Demon;
import co.edu.utadeo.dodoro.service.DemonService;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/demons")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DemonController extends EntityController<Demon> {

    private DemonService demonService;

    DemonController(DemonService service) {
        super(service);
        demonService = service;
    }

    @PutMapping("/{id}")
    public Demon createArtefact(@RequestBody Demon demon, @PathVariable Integer id) throws Exception {
        Demon result = service.getOne(id);
        result.setName(demon.getName());
        result.setImageUrl(demon.getImageUrl());
        result.setDefeat(demon.isDefeat());
        result.setDefeatedOn(demon.getDefeatedOn());
        result.setPlace(demon.getPlace());
        result.setBodyPart(demon.getBodyPart());
        return service.save(result);
    }

    @GetMapping("/place/{id}")
    public List<Demon> getDemonsByPlace(@PathVariable Integer id){
        return demonService.getDemonByPlaceId(id);
    }

    @GetMapping("/defeated")
    public List<Demon> getDemonsDefeated(){
        return demonService.getDemonsDefeated();
    }
}

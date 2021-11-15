package co.edu.utadeo.dodoro.rest;

import co.edu.utadeo.dodoro.domain.Fight;
import co.edu.utadeo.dodoro.repository.DemonRepository;
import co.edu.utadeo.dodoro.service.FightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/fights")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FightController extends EntityController<Fight> {

    FightController(FightService service) {
        super(service);
    }
}

package co.edu.utadeo.dodoro.service;

import co.edu.utadeo.dodoro.domain.BodyPart;
import co.edu.utadeo.dodoro.domain.Demon;
import co.edu.utadeo.dodoro.domain.Place;
import co.edu.utadeo.dodoro.repository.BodyPartRepository;
import co.edu.utadeo.dodoro.repository.DemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DemonService extends EntityService<Demon>{

    private DemonRepository demonRepository;

    @Autowired
    private BodyPartService bodyPartService;

    @Autowired
    private PlaceService placeService;

    public DemonService(DemonRepository repository) {
        super(repository);
        demonRepository = repository;
    }

    @Override
    public Demon save(Demon entity) throws Exception {

        BodyPart bodyPart = null;

        if(entity.getBodyPart().getId() == null){
            bodyPart = this.bodyPartService.save(entity.getBodyPart());
        }else{
            bodyPart = this.bodyPartService.getOne(entity.getBodyPart().getId());
            if(!bodyPart.getName().equals(entity.getBodyPart().getName())){
                bodyPart.setName(entity.getBodyPart().getName());
                bodyPart = this.bodyPartService.save(bodyPart);
            }
        }

        entity.setBodyPart(bodyPart);

        Place place = this.placeService.getOne(entity.getPlace().getId());
        entity.setPlace(place);

        return this.repository.save(entity);
    }

    public List<Demon> getDemonByPlaceId(Integer id){
        return demonRepository.findByPlaceById(id);
    }

    public List<Demon> getDemonsDefeated(){
        return demonRepository.findByDefeated();
    }
}

import { Component, OnInit } from '@angular/core';
import monstersPlaces from '../../model/monstersPlaces.json';
import { ActivatedRoute, Router} from '@angular/router';
import { DemonService } from '../../services/demon.service';
import { Demon } from 'src/app/model/demon.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  private places:any = monstersPlaces.places;
  demons:Demon[]=[];
  placeName:string='';
  constructor(private route:ActivatedRoute, private router: Router, private service:DemonService) { }

  ngOnInit(): void {
    
    let parameter = this.route.snapshot.paramMap.get('id');
    if(parameter){
      this.service.getDemonsByPlace(parseInt(parameter)).subscribe((res)=>{
        this.demons = res;
      });
    }
  }

  back(){
    this.router.navigate(['/adventure'])
  }

  fight(id:number | null){
    this.router.navigate(['/fight', id]);
  }

}

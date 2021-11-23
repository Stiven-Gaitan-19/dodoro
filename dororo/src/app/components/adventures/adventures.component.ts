import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Place } from 'src/app/model/Place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {

  places:Place[] = [];
  constructor(private route:Router, private service: PlaceService) { }

  ngOnInit(): void {
    this.service.getPlaces().subscribe((res)=>{
      this.places = res;
    });
  }

  navigate(id:number | null){
    this.route.navigate(['place',id,'demons']);
  }

  back(){
    this.route.navigate(['/'])
  }
}

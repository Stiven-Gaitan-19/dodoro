import { Component, OnInit } from '@angular/core';
import monstersPlaces from '../../model/monstersPlaces.json';
import historical from '../../model/historicalFights.json';
import { Router } from '@angular/router';
import { DemonService } from 'src/app/services/demon.service';
import { Demon } from 'src/app/model/demon.model';
import { BodyPartService } from 'src/app/services/body-part.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  demonsDefeated:Demon[]=[];
  bodyParts:number=0;

  constructor(private route:Router, private service: DemonService, private bodyPartService: BodyPartService) { }

  ngOnInit(): void {
    this.service.getDemonsDefeated().subscribe((res)=>{
      this.demonsDefeated = res;
    });
    
    this.bodyPartService.getBodyParts().subscribe((res)=>{
      this.bodyParts = res.length;
    });
  }

  getDemonsDefeat():any[]{
    let fights:any =  historical.fights;
    
    let demons = [];
    for(let demon of fights){
        if(demon.defeat){
          if(typeof demon.foughtOn !== 'string'){
            demon.foughtOn = this.formatDate(demon.foughtOn);
          }
          demons.push(demon);
        }
    }
    
    return demons;
  }

  private formatDate(date:Date):string{
    
    let day = date.getDay();
    let month =date.getMonth()+1;
    let year = date.getFullYear();
    let hours = date.getMinutes();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
  }

  back(){
    this.route.navigate(['/'])
  }

  history(){
    this.route.navigate(['/history-fights'])
  }

  goDororo(){
    this.route.navigate(['/dororo'])
  }
}

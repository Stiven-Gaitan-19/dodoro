import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character.model';
import { DororoService } from '../../services/dororo.service';

@Component({
  selector: 'app-dororo',
  templateUrl: './dororo.component.html',
  styleUrls: ['./dororo.component.css']
})
export class DororoComponent implements OnInit {

  dororo:Character = new Character();
  artefacts:any;

  constructor(private route: Router, private service: DororoService) { }

  ngOnInit(): void {
    this.service.getCharacter(1).subscribe((character:Character)=>{
      this.dororo = character;
      this.showArtefacts();
    });
  }

  showArtefacts(){
    let numbersAlredy = [];
    let artefactsTemp = [...this.dororo.artefacts];
    
    while (artefactsTemp.length > 5) {
      let number = this.randomNumber(0, artefactsTemp.length-1); 
      numbersAlredy.push(number);
      artefactsTemp.splice(number, 1);
    }
    this.artefacts = artefactsTemp;
  }


  back(){
    this.route.navigate(['/historical'])
  }

  private randomNumber(min:number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

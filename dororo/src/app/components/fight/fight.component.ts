import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, formatDate } from '@angular/common'
import monstersPlaces from '../../model/monstersPlaces.json';
import historical from '../../model/historicalFights.json';
import { DemonService } from 'src/app/services/demon.service';
import { Demon } from 'src/app/model/demon.model';
import { FightService } from 'src/app/services/fight.service';
import { Fight } from 'src/app/model/fight.model';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit, OnDestroy {

  private places = monstersPlaces.places;
  demon = new Demon();
  stylePorcent = {
    'width': '50%'
  }
  game = {
    started: false,
    finished: false,
    fight: false,
    kickLevel: 50
  };
  intervalID:any;
  stateGame:any=3;
  historical:any = historical.fights;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private service:DemonService, private fightService: FightService) { 
    
  }

  ngOnInit(): void {
    
    let demonId = this.route.snapshot.paramMap.get("id");
    if(demonId){
      this.service.getDemonById(parseInt(demonId)).subscribe((res)=>{
        if(res.defeat){
          this.back();
        }else{
          this.demon = res;
          console.log(res);
          
        }
        
        
      });
    }
    
  }

  startFight():void{
    this.game.fight = true;
    let counterToStart = 3;
    let interval = setInterval(()=>{
      counterToStart--;
      this.stateGame = counterToStart;
      if(counterToStart == 0){
        this.stateGame = 'Fight!';
      }
      if(counterToStart < 0){
        // Destroy interval of counter
        this.destroyInterval(interval);
        // Machine begins to fight
        this.intervalID = setInterval(()=> this.hitOponent('machine'),this.repetAction());
        this.game.started = true;
      }
    },1000);
  }

  userKick():void{
    if(this.game.started){
      this.hitOponent('user');
    }
  }

  hitOponent(kicker:string):void{
    let lifePoints=2;
    if(this.game.finished){
      return;
    }
    if(kicker==='machine'){
      this.game.kickLevel-=lifePoints;
    }else{
      this.game.kickLevel+=lifePoints;
    }
    this.stylePorcent.width = `${this.game.kickLevel}%`;
    this.checkWinner();
  }

  checkWinner():void{
    if(this.game.kickLevel >= 100){
      this.destroyInterval(this.intervalID);
      this.stateGame = 'YOU WIN!';
      this.demon.defeat = true;
      this.demon.defeatedOn = this.formateDefeatedOnDate(new Date());
      this.updateDemon();
      this.registerFight(true);
      this.game.finished = true;
    }else if(this.game.kickLevel <= 0){
      this.destroyInterval(this.intervalID);
      this.registerFight(false);
      this.stateGame = 'YOU LOSE!';
      this.game.finished = true;
    }
  }

  back(){
    this.location.back();
  }

  registerFight(defeated: boolean):void{
    let fight = new Fight();
    fight.setFoughtOn(new Date());
    fight.demon = this.demon;
    fight.defeated = defeated;
    
    this.fightService.saveFight(fight).subscribe();
  }

  private repetAction():number{
    let random = this.randomNumber(1,5);
    if(random == 1){
      return 150;
    }
    return random*100;
  }

  private randomNumber(min:number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  destroyInterval(interval:any):void{
    clearInterval(interval);
  }

  ngOnDestroy():void{
    this.destroyInterval(this.intervalID);
  }

  private updateDemon():void{
    console.log(this.demon);
    
    this.service.update(this.demon).subscribe();
  }

  private formateDefeatedOnDate(date: Date ): string{
    return formatDate(date, 'yyyy MMM d hh:mm:ss aaa', 'en-US');
  }

}

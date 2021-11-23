import { Component, OnInit } from '@angular/core';
import historical from '../../model/historicalFights.json';
import { Router }  from '@angular/router'
import { Fight } from 'src/app/model/fight.model';
import { FightService } from 'src/app/services/fight.service';

@Component({
  selector: 'app-history-fights',
  templateUrl: './history-fights.component.html',
  styleUrls: ['./history-fights.component.css']
})
export class HistoryFightsComponent implements OnInit {

  fights:Fight[]= [];
  constructor(private router:Router, private service: FightService) { }

  ngOnInit(): void {
    this.service.getFights().subscribe(res => {
      this.fights = res;
    })
  }

  back(){
    this.router.navigate(['/historical'])
  }

}

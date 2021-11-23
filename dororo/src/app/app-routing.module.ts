import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventuresComponent } from './components/adventures/adventures.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { FightComponent } from './components/fight/fight.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { HistoryFightsComponent } from './components/history-fights/history-fights.component';
import { DororoComponent } from './components/dororo/dororo.component';
import { DororoBagComponent } from './components/dororo-bag/dororo-bag.component';
import { DemonListComponent } from './components/demon/demon-list/demon-list.component';
import { PlaceListComponent } from './components/place/place-list/place-list.component';
import { DemonModifyComponent } from './components/demon/demon-modify/demon-modify.component';
import { PlaceModifyComponent } from './components/place/place-modify/place-modify.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'adventure', component: AdventuresComponent },
  { path: 'place/:id/demons', component: PlaceDetailComponent },
  { path: 'fight/:id', component: FightComponent },
  { path: 'historical', component: HistoricalComponent },
  { path: 'history-fights', component: HistoryFightsComponent },
  { path: 'dororo', component: DororoComponent },
  { path: 'demons', component: DemonListComponent },
  { path: 'places', component: PlaceListComponent },
  { path: 'demons/modify/:id', component: DemonModifyComponent },
  { path: 'places/modify/:id', component: PlaceModifyComponent },
  { path: 'dororo/bag', component: DororoBagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

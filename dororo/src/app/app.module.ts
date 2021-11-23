import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdventuresComponent } from './components/adventures/adventures.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { FightComponent } from './components/fight/fight.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { HistoryFightsComponent } from './components/history-fights/history-fights.component';
import { DororoComponent } from './components/dororo/dororo.component';
import { DemonListComponent } from './components/demon/demon-list/demon-list.component';
import { PlaceListComponent } from './components/place/place-list/place-list.component';
import { DemonModifyComponent } from './components/demon/demon-modify/demon-modify.component';
import { PlaceModifyComponent } from './components/place/place-modify/place-modify.component';
import { DororoBagComponent } from './components/dororo-bag/dororo-bag.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdventuresComponent,
    PlaceDetailComponent,
    FightComponent,
    HistoricalComponent,
    HistoryFightsComponent,
    DororoComponent,
    DemonListComponent,
    PlaceListComponent,
    DemonModifyComponent,
    PlaceModifyComponent,
    DororoBagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

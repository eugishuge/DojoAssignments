import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BattleService } from './battle.service'
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RankingComponent } from './ranking/ranking.component';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RankingComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

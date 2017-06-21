import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BattleComponent} from 'app/battle/battle.component';
import {MainComponent} from 'app/main/main.component';
import {RankingComponent} from 'app/ranking/ranking.component';

const routes: Routes = [
   {path: '', pathMatch: 'full', component: MainComponent },
   {path: 'ranking', component: RankingComponent },
   {path: 'battle', component: BattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

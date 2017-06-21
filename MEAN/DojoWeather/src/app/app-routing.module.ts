import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashdcComponent } from './washdc/washdc.component';
import { ChicagoComponent } from './chicago/chicago.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: WashdcComponent},
  { path:'seattle', component: SeattleComponent},
  { path:'sanjose', component: SanjoseComponent},
  { path:'burbank', component: BurbankComponent},
  { path:'dallas', component: DallasComponent },
  { path:'chicago', component: ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

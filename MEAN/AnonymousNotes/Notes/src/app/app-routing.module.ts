import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowComponent} from 'app/show/show.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

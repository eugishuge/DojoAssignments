import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AnswerComponent} from './answer/answer.component';
import {QAComponent} from './qa/qa.component';
import {NewComponent} from './new/new.component';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RegistrationComponent},
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'qa', component: QAComponent },
  { path: 'answer', component: AnswerComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

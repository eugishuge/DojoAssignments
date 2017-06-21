import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AnimalService} from 'app/animal.service'
import { HttpModule} from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

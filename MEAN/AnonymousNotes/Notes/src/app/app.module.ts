import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ShowService} from './show.service'
import { HttpModule} from '@angular/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }

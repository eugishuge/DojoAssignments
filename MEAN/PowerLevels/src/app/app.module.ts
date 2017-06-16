import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';


import { AppComponent } from './app.component';
import { HumanComponentComponent } from './human-component/human-component.component';
import { SaiyanComponentComponent } from './saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './super-saiyan-component/super-saiyan-component.component';
import { SuperSaiyanTwoComponent } from './super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponentComponent,
    SaiyanComponentComponent,
    SuperSaiyanComponentComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

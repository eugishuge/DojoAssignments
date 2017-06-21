import { Component, OnInit } from '@angular/core';
import { ShowComponent } from './show/show.component';
import { Router } from "@angular/router";
import { ShowService } from "app/show.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Anonymous Notes';
  notes: any = [];


  Add(content){
      console.log('adding')
  }
}

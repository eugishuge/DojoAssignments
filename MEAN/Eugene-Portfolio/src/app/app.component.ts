import { Component, OnInit } from '@angular/core';
import * as $ from 'jQuery';
import { MaterializeModule } from "angular2-materialize";
import 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    //   $(document).ready(function(){
    //       $('.parallax').parallax();
    //     });
    }

ngOnInit(){
    console.log("on Init")
}
}

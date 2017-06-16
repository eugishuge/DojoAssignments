import { Component, Input, Output } from '@angular/core';
import { Power } from './power';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 num = [];
 level = new Power();

 logNum(){
     this.num.push(this.level)
     this.level = new Power();
     console.log(this.num[this.num.length - 1])
 }
}

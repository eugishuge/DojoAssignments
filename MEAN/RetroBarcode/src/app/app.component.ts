import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Bar Code';
  color = ['Aquamarine', 'Azure', "Bisque","Chocolate", 'CornflowerBlue', 'DarkCyan','DarkSalmon'];

  a:number = (Math.floor(Math.random() * 6)) + 1;
  b:number = (Math.floor(Math.random()*6))+1;
  c:number = (Math.floor(Math.random()*6))+1;
  d:number = (Math.floor(Math.random()*6))+1;
  e:number = (Math.floor(Math.random()*6))+1;
  f:number = (Math.floor(Math.random()*6))+1;
  g:number = (Math.floor(Math.random()*6))+1;
}

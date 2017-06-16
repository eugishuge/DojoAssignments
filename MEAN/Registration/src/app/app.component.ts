import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Table} from './Table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration Form';

  usersinfo = [];
  user = new Table();

  onSubmit(){
      this.usersinfo = ["Registered Information"];
      this.usersinfo.push(this.user);
      this.user = new Table();
  }
}

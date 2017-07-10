import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

question = ''
  constructor(private _LoginService : LoginService, private _Router:Router) { }

  ngOnInit() {
  }

  newQuestion(){
      this._LoginService.newQuestion(this.question)
  }
}

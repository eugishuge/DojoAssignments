import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user = {fname: ''}

  constructor(private _LoginService : LoginService, private _Router:Router) {
      if(Cookie.check("username")){
      this._Router.navigateByUrl('home')
    }
}

  ngOnInit() {
  }

  Register(){
      console.log('submit works')
      this._LoginService.registerUser(this.user)
    //   .then((data)=>{
    //     if(data.error){
    //       alert(data.messages)
    //     }else{
    //       console.log("inside register component")
    //       console.log(data)
    //       Cookie.set('username', data.user._id)
          this._Router.navigateByUrl('home')
        }
      }
  //     .catch((err)=>{
  //       console.log("inside register component")
  //       console.log(err)
  //     })
  //   }
  // }

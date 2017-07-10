import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private _Http: Http) { }

  registerUser(user){
      console.log('made it to Services')
      return this._Http.post('/users', user)
      .map((data)=>{
          console.log('inside services after http call')
          return data.json()
      })
      .toPromise();
    }

    newQuestion(question){
        console.log("new service question")
        return this._Http.post('/question', question)
        .map((data)=>{
            console.log('newquestion-inside services')
            return data.json()
        })
        .toPromise();
    }
}

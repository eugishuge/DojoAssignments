import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import 'rxjs'



@Injectable()
export class AnimalService {

  constructor(private _http: Http ) {
  }
  get(){
      return this._http.get('/').map(res=>res.json()).toPromise()
  }
}

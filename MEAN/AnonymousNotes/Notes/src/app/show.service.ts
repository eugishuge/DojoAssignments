import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs'

@Injectable()
export class ShowService {

  constructor(private _http: Http) { }
  notes = {}
  get(){
      return this._http.get('/notes').map(res=>res.json()).toPromise();
  }

create(note){
    console.log('we got here')
    return this._http.post('/notes', note)
    .map( data => data.json())
    .toPromise();

    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BattleService {
  constructor(private _http: Http) { }
    getPlayer(username) {
        console.log(username)
        return this._http.get('https://api.github.com/users/'+username).map(data=>data.json()).toPromise()
    }

    get(){
        return this._http.get('/battle').map(res => res.json()).toPromise()
    }

    create(user){
        console.log('creating score')
        return this._http.post('/battle', user)
        .map( data => data.json())
        .toPromise();
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  constructor(private _http: Http) { }
  getWeather(city) {
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=c41e2ebe8ced833502e37eececf6b017').map(data=>data.json()).toPromise();
  }
}

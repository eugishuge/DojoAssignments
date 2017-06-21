import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
    weather=[];
    city = "Seattle";
    humidity = 0;
    avg_temp = 0;
    high_temp = 0;
    low_temp =0;
    status = "";

  constructor(private _httpService: HttpService){}
  ngOnInit() {
      this._httpService.getWeather(this.city)
      .then(weather => {this.weather = weather
      console.log(this.weather)

    this.avg_temp= weather.main.temp
    console.log(weather.main.temp_max)

    this.high_temp= weather.main.temp_max
    console.log(weather.main.temp_max)

    this.low_temp= weather.main.temp_min
    console.log(weather.main.temp_min)

    this.humidity= weather.main.humidity
    console.log(weather.main.temp_max)

    this.status= weather.weather[0].description
    console.log(weather.weather[0].description)

      })
      .catch(err => {console.log(err) })
  }

}

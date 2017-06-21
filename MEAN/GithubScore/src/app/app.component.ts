import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculate Your GitHub Score!';
  username = "";
  githubInfo = [];
  score = 0;
  constructor(private _httpService: HttpService){}

  onSubmit(name){
      this.username = name.username;

      this._httpService.getScore(this.username)
      .then(githubInfo => {this.githubInfo = githubInfo
      this.score = githubInfo.followers + githubInfo.public_repos;
        console.log(this.score)
    })
      .catch(err => {console.log(err) })
  }
}

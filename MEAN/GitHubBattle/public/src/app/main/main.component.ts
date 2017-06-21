import { Component, OnInit } from '@angular/core';
import { BattleService } from '../battle.service';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
user1:any = {}
user2:any = {}
username = ''
users = []
score_1 = 0
score_2 = 0

  constructor(private _battleService: BattleService) { }

  ngOnInit() {
  }

  onSubmit1(){
      console.log('submitted player ONE')
      this._battleService.getPlayer(this.user1.username)

      .then(user => {
         this.score_1 = (user.public_repos + user.followers) * 12
          user.score = this.score_1;
          user.user = this.user1.username;
          console.log(this.score_1)
          this.users.push(user),

          this._battleService.create(user)
          .then(user => {
          } )
          .catch(err => console.log(err))


      })

      .catch(err => {console.log(err)})
  }

  onSubmit2(){
      console.log('submitted player ONE')
      this._battleService.getPlayer(this.user2.username)

      .then(user => {
         this.score_2 = (user.public_repos + user.followers) * 12
          user.score = this.score_2;
          user.user = this.user2.username;
          console.log(this.score_2)
          this.users.push(user),

          this._battleService.create(user)
          .then(user => {
          } )
          .catch(err => console.log(err))


      })

      .catch(err => {console.log(err)})
  }

  addUser(user, i){
      user.score_2 = user.
  }

}

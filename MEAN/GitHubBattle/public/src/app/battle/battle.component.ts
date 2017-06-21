import { Component, OnInit } from '@angular/core';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
users = [];

  constructor(private _battleService: BattleService) {
      this._battleService.get()
      .then(res => {
          this.users = res
          console.log("driveslowhomie", this.users)
      })
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }

}

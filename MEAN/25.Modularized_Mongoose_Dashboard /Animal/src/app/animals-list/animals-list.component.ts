import { Component, OnInit } from '@angular/core';
import {AnimalService} from 'app/animal.service'

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {
animals : any = [];

  constructor(private _AnimalService:AnimalService) {
      console.log('just created animal-list component')
      this._AnimalService.get()
      .then(res => this.animals = res.json)

      .catch(err=> console.log(err))
  }

  ngOnInit() {
  }

}

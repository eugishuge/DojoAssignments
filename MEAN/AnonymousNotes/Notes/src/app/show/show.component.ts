import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"
import { Router } from "@angular/router";
import { ShowService } from "app/show.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
notes: any = [];
  constructor(
      private _ShowService: ShowService,
      private _router: Router
  ) {
      this._ShowService.get()
      .then(notes => this.notes = notes
      )
      .catch(err => console.log(err))
   }

   note = {}

  ngOnInit() {
  }

  Add(){
      console.log("its here")
      this._ShowService.create(this.note)
      .then(notes => {this.notes = notes
          console.log(this.notes)
      } )
      .catch(err => console.log(err))
    }
}

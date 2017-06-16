import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
@Input() Show;


  voteUp(x, i){
          x.count++;


  }

  voteDown(x, i){
      if(x.count>0){
        x.count--;

      }
  }

  delete(i){
    this.Show.splice(i, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}

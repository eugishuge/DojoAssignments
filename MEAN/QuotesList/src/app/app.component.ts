import { Component, Input, Output } from '@angular/core';
import { Quote } from './quotes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Add Quotes';
  all = [];
  quote = new Quote();

  addQuote(){
    //   console.log("added")
      this.all.push(this.quote);
    //   console.log(this.all)
      this.quote = new Quote()
  }

}

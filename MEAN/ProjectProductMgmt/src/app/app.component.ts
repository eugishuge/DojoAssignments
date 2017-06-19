import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from './product.service'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PPM - Project Product Management';
}

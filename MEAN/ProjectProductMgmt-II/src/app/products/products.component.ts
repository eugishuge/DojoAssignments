import { Component, OnInit } from '@angular/core';
import { ProductsService } from "app/products.service";
import {Products} from '../products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    all = [];
  constructor(
      private _ProductsService:ProductsService
  ) {
     this.all = this._ProductsService.getProducts();
  }

  ngOnInit() {
  }

}

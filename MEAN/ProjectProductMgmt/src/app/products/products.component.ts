import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
    title: "Show All Products"
    all: Array<Products>;


  constructor(
      private _productService: ProductService,
      private _router: Router,
  ) {
_productService.productsObservable.subscribe((updatedProducts) =>
{this.all = updatedProducts;

}
   )}

  ngOnInit() {}

  }

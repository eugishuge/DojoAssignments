import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service'
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
    title = "Show All Products";
    all: Array<Products>;


  constructor(
      private _productService: ProductService,
      private _router: Router,
      private _ActivatedRoute:ActivatedRoute
  ) {
_productService.productsObservable.subscribe((updatedProducts) =>
{this.all = updatedProducts;

}
   )}

  ngOnInit() {}

  onDelete(i){
      this.all.splice(i,1)
  }

  onEdit(i){
    this._router.navigate(['/edit/i'])
    console.log('edit function')
  }

  }

import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    title = "Edit All Products";
    all: Array<Products>;


  constructor(
      private _productService: ProductService,
      private _router: Router,
      private _ActivatedRoute:ActivatedRoute
  ) {
    _productService.productsObservable.subscribe( (updatedProducts) =>{
        console.log(updatedProducts)
    this.all = updatedProducts
}
   )}
  ngOnInit() {
  }

}

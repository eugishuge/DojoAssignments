import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    title = "Create New Product";
    all: Array<Products>;
    product_ = new Products();

  constructor(
      private _productService: ProductService,
      private _router: Router
  ) {
 _productService.productsObservable.subscribe( (updatedProducts) =>{
     console.log(updatedProducts)
    this.all = updatedProducts
})
  }

  ngOnInit() {

  }


  onSubmit(){
      this.all.push(this.product_)
    //   console.log(this.all)
      this._productService.updateProducts(this.all)
    //   console.log('hello')
      this.product_ = new Products();
      this._router.navigate(['/products'])
  }
}

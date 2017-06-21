import { Component, OnInit } from '@angular/core';
import { Products } from '../products'
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from "app/products.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    all = []
    newProduct = new Products()

  constructor(
    private _ProductsService:ProductsService ,
    private _router:Router) { }

  ngOnInit() {
  }

  createProduct(){
     this._ProductsService.create(this.newProduct);
     console.log(this.newProduct)
     this._router.navigate(['/products']);
 }
}

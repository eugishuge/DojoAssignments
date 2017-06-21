import { Component, OnInit } from '@angular/core';
import { ProductsService } from "app/products.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Products } from '../products'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
all = [];
products = new Products();
index = 0;
edit_prod = {}

  constructor(
      private _ProductsService:ProductsService,
      private _Router:Router,
      private _ActivatedRoute:ActivatedRoute) {
          this.index = _ActivatedRoute.snapshot.params.id

          this.edit_prod = this._ProductsService.getOneProduct(this.index)

          console.log(this.edit_prod)
    //   this._ActivatedRoute.params.subscribe(param => {
    //       this._ProductsService.getOneProduct(param.index)
    //       this.index = (param.index)
    //       console.log(param.index)
    //       })
        }


  ngOnInit() {
  }

  edit(){
      this.edit_prod()
  }

}

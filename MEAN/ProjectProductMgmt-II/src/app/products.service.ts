import { Injectable } from '@angular/core';
import { Products } from './products'


@Injectable()
export class ProductsService {
all = []
newProduct = new Products()

  constructor() { }

  create(newProduct){
  this.all.push(newProduct);
    }

  getProducts(){
  return this.all;
    }

  getOneProduct(index){
  return this.all[index]
    }
}

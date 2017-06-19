import { Injectable } from '@angular/core';
import {Products} from './products'
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ProductService {
    productsObservable = new BehaviorSubject([]);

  constructor() { }
  updateProducts(products: Array<Products>){
      this.productsObservable.next(products)

  }
}

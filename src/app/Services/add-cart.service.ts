import { Carts } from './../models/cartProducts';
import { Injectable } from '@angular/core';

import { Product } from '../product';

@Injectable({ providedIn: 'root' })
export class AddCartService {

  constructor() { }

  addToCart(product) {
    Carts.push(product);
    console.log(product);
  }

}

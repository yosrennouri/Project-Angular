import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1,2,3).pipe(map(x => x + '!!!')); // etc
@Injectable(
)
export class AddCartService {
  public shoppingCartLe: string;
  public shoppingCartlength;

  constructor() { }

  // constructor(_addCartService: AddCartService) {
  // }


  getQ() {
    this.shoppingCartLe = JSON.parse(localStorage.getItem('shoppingCart'));
    this.shoppingCartlength = this.shoppingCartLe.length;
    return this.shoppingCartlength;
  }
}

import { Component, OnInit } from '@angular/core';
import { AddCartService } from 'src/app/Services/add-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart = [];
  public removeProducts: any;
  public total;
  public product: any;
  public shoppingCartLe: string;
  public shoppingCartlength;
  public key: string;

  constructor(
    public addCartService: AddCartService, 
  ) { }

  ngOnInit() {

    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  }
  
   remove(removeBook) {




    
    for (let i = 0; i < this.shoppingCart.length; i++) {
       if (removeBook === this.shoppingCart[i]) {
        this.removeProducts  = this.shoppingCart.indexOf(removeBook);
        this.shoppingCart.splice(this.removeProducts, 1);
        this.key = 'shoppingCart';
        localStorage.setItem(this.key, JSON.stringify(this.shoppingCart));
       }
    }
   }
  
   getTotal() {
   this.total = 0;
    for (let i = 0; i < this.shoppingCart.length; i++) {
        this.total = this.total +  this.shoppingCart[i].ourPrice;
    }
    return this.total;
  }
  public Buy(shoppingCart) {
  
  }
  
  
  

  }



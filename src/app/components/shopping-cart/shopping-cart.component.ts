import { element } from 'protractor';
import { Carts } from './../../models/cartProducts';
import { ProductListComponent } from './../product-list/product-list.component';
import { Component, OnInit } from '@angular/core';
import { AddCartService } from 'src/app/Services/add-cart.service';
import { Product } from '../../product';
import { StorageService } from '../../Services/storage.service';
import { forEach } from '../../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  Carts: Product[] = [];
  quantity : number=1;
  sum : number = 0;
  constructor(public addCartService: AddCartService,private storageService : StorageService) {
  }

  ngOnInit() {
    this.Carts = this.storageService.read("products")
    this.Carts.forEach(element => { console.log(this.sum);   this.sum += element.prix});
    console.log(this.Carts);
  }

  getCartProducts(){
    return this.Carts;    
  }
}
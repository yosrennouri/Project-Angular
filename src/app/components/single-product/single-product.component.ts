import { StorageService } from './../../Services/storage.service';
import { Carts } from './../../models/cartProducts';
import { AddCartService } from './../../Services/add-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProductsService } from '../../Services/produts.service';
import { Product } from '../../product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product_id: number;
  product: any;
  Carts: any;
  constructor(private activatedRoute: ActivatedRoute, private storageService:StorageService,
    private productService: ProductsService, private addCartService: AddCartService) {

  }

  ngOnInit() {
    this.product_id = this.activatedRoute.snapshot.params['id'];
    this.loadProduct();
    this.Carts = Carts

  }

  loadProduct() {
    this.productService.getProductById(this.product_id).subscribe(data => {
      this.product = data;
      console.log(this.product);

    })
  }

  addProductToCart(){
    this.addCartService.addToCart(this.product);
    let products : Product[] = [];
     products = this.storageService.read("products");
    if(products)
    {
      products.push(this.product);
      this.storageService.write("products",products);
    }
    else{
    products = [];
    products.push(this.product);      
    this.storageService.write("products", products);
  }
}

}
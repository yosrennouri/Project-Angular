import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/produts.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  public products: any;
  laptops = [ ];

  constructor(private Product: ProductsService) 
  { }

  ngOnInit() {
  this.Product.getProduct().subscribe(data => this.products  = data
  )
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/produts.service';

@Component({
  selector: 'app-tablette-tactile',
  templateUrl: './tablette-tactile.component.html',
  styleUrls: ['./tablette-tactile.component.css']
})
export class TabletteTactileComponent implements OnInit {

  public products: any;
  laptops = [ ];

  constructor(private Product: ProductsService) 
  { }

  ngOnInit() {
  this.Product.getProduct().subscribe(data => this.products  = data
  )
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/produts.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PCComponent implements OnInit {

  public products: any;
  laptops = [ ];

  constructor(private Product: ProductsService) 
  { }

  ngOnInit() {
  this.Product.getProduct().subscribe(data => this.products  = data
  )
  }
}

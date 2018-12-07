import { ProductsService } from './../../../Services/produts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disques-externes',
  templateUrl: './disques-externes.component.html',
  styleUrls: ['./disques-externes.component.css']
})
export class DisquesExternesComponent implements OnInit {

  public products: any;
  laptops = [ ];

  constructor(private Product: ProductsService) 
  { }

  ngOnInit() {
  this.Product.getProduct().subscribe(data => this.products  = data
  )
  }

}

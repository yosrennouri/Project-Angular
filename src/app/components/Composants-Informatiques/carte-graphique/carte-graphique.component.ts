import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/produts.service';

@Component({
  selector: 'app-carte-graphique',
  templateUrl: './carte-graphique.component.html',
  styleUrls: ['./carte-graphique.component.css']
})
export class CarteGraphiqueComponent implements OnInit {

  public products: any;
  laptops = [ ];

  constructor(private Product: ProductsService) 
  { }

  ngOnInit() {
  this.Product.getProduct().subscribe(data => this.products  = data
  )
  }

}

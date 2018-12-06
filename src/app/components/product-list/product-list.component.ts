
import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../../Services/produts.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []
})
export class ProductListComponent implements OnInit {
  public products: any;
  laptops = [ ];

  constructor(private Product: ProductsService) 
  { }

  ngOnInit() {
  this.Product.getProduct().subscribe(data => this.products  = data
  )
  }

}

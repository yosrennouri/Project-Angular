
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/produts.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []
})
export class ProductListComponent implements OnInit {
  public products: any;

  public filtredProducts: any[];


  constructor(private Product: ProductsService) { }

  ngOnInit() {
    this.Product.getProduct().subscribe(data => { this.products = data; });
    this.filtredProducts = this.products;
  }
  
  filter(query) {
    this.filtredProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) :
      this.products;
  }
}

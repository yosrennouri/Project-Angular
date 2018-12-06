import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProductsService } from '../../Services/produts.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
 
  product_id:number;
  product  : any; 
  constructor(private activatedRoute: ActivatedRoute, private productService : ProductsService) { 

  }

  ngOnInit() {
    this.product_id=this.activatedRoute.snapshot.params['id'];
    this.loadProduct();

  }
  loadProduct(){
    this.productService.getProductById(this.product_id).subscribe(data=>{
      this.product = data;
      console.log(this.product);
    })
  }

}

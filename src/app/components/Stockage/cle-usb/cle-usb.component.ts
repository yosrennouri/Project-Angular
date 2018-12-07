import { ProductsService } from './../../../Services/produts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cle-usb',
  templateUrl: './cle-usb.component.html',
  styleUrls: ['./cle-usb.component.css']
})
export class CleUSBComponent implements OnInit {

 public products: any;
  laptops = [ ];

  constructor(private Product: ProductsService) 
  { }

  ngOnInit() {
  this.Product.getProduct().subscribe(data => this.products  = data
  )
  }

}
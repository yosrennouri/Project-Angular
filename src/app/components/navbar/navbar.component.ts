import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public products: any = []
  filtredProducts

  constructor() { }

  ngOnInit() {
  }
  
  filter(query) {
    this.filtredProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) :
      this.products;
  }

}

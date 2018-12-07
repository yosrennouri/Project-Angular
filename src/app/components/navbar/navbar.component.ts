import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public products: any = []
  public routes: any = [{ path: 'imprimante' },
  { path: 'photocopieur'},
  { path: 'scanner'},
  { path: 'ordinateur' },
  { path: 'pc'},
  { path: 'carte_mémoire' },
  { path: 'clé_USB' },
  { path: 'disque_externe'},
  { path: 'disque_interne' },
  { path: 'carte_graphique', },
  { path:'navbar'},
  { path:'single-product/:id'},
  { path: 'carte_mère'},
  { path: 'processeur'},
  { path: 'ventilateur', },
  { path: 'lampe', },
  { path: 'sac_pc', },
  { path: 'tapis', },
  { path: 'casque', },
  { path: 'clavier', },
  { path: 'manette', },
  { path: 'souris', },
  { path: 'web_cam', },
  { path: 'tablette_tactile', },
  { path: 'Home', },
  { path: 'contact', },
  { path: 'Propos', },
  {path:'smart-phone'},
  {path:'telephone-fixe'},
  { path: '**'},
  { path:'login', }]
  filtredProducts

  constructor() { }

  ngOnInit() {
  }
  
  filter(query) {
    this.filtredProducts = (query) ?
      this.routes.filter(p => p.path.toLowerCase().indexOf(query.toLowerCase()) >= 0) :
      this.routes;
      console.log(query);
  }

}

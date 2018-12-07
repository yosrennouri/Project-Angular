import { PromotionsComponent } from './components/promotions/promotions.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ContactComponent } from './components/contact/contact.component';

import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CarteGraphiqueComponent } from './components/Composants-Informatiques/carte-graphique/carte-graphique.component';
import { CarteMereComponent } from './components/Composants-Informatiques/carte-mere/carte-mere.component';
import { ProcesseurComponent } from './components/Composants-Informatiques/processeur/processeur.component';
import { VentilateurComponent } from './components/Composants-Informatiques/ventilateur/ventilateur.component';
import { LampeComponent } from './components/Peripheriques-Accessoires/Accessoires/lampe/lampe.component';
import { SacPCComponent } from './components/Peripheriques-Accessoires/Accessoires/sac-pc/sac-pc.component';
import { TapisComponent } from './components/Peripheriques-Accessoires/Accessoires/tapis/tapis.component';
import { CasquesComponent } from './components/Peripheriques-Accessoires/P\u00E9ripheriques/casques/casques.component';
import { ClavierComponent } from './components/Peripheriques-Accessoires/P\u00E9ripheriques/clavier/clavier.component';
import { ManetteComponent } from './components/Peripheriques-Accessoires/P\u00E9ripheriques/manette/manette.component';
import { SourisComponent } from './components/Peripheriques-Accessoires/P\u00E9ripheriques/souris/souris.component';
import { WebCamComponent } from './components/Peripheriques-Accessoires/P\u00E9ripheriques/web-cam/web-cam.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ImprimanteComponent } from './components/Impression/imprimante/imprimante.component';
import { PhotocopieurComponent } from './components/Impression/photocopieur/photocopieur.component';
import { ScannerComponent } from './components/Impression/scanner/scanner.component';
import { OrdinateurDeBureauComponent } from './components/ordinateur/ordinateur-de-bureau/ordinateur-de-bureau.component';
import { PCComponent } from './components/ordinateur/pc/pc.component';
import { CarteMemoireComponent } from './components/stockage/carte-memoire/carte-memoire.component';
import { CleUSBComponent } from './components/stockage/cle-usb/cle-usb.component';
import { DisquesExternesComponent } from './components/stockage/disques-externes/disques-externes.component';
import { DisquesInternesComponent } from './components/stockage/disques-internes/disques-internes.component';
import { TabletteTactileComponent } from './components/ordinateur/tablette-tactile/tablette-tactile.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { TermesComponent } from './components/termes/termes.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch:'full'},
    { path: 'imprimante', component:ImprimanteComponent },
    { path: 'photocopieur', component:PhotocopieurComponent },
    { path: 'scanner', component:ScannerComponent },
    { path: 'ordinateur', component:OrdinateurDeBureauComponent },
    { path: 'pc', component:PCComponent },
    { path: 'carte_mémoire', component:CarteMemoireComponent },
    { path: 'clé_USB', component:CleUSBComponent },
    { path: 'disque_externe', component:DisquesExternesComponent },
    { path: 'disque_interne', component:DisquesInternesComponent },
    { path: 'carte_graphique', component:CarteGraphiqueComponent },
    {path:'navbar',component:NavbarComponent},
    {path:'single-product/:id', component:SingleProductComponent},
    { path: 'carte_mère', component: CarteMereComponent},
    { path: 'processeur', component: ProcesseurComponent},
    { path: 'Termes_et_conditions', component: TermesComponent},
    { path: 'ventilateur', component:VentilateurComponent },
    { path: 'lampe', component:LampeComponent },
    { path: 'sac_pc', component:SacPCComponent},
    { path: 'tapis', component:TapisComponent },
    { path: 'casque', component:CasquesComponent },
    { path: 'clavier', component:ClavierComponent },
    { path: 'manette', component:ManetteComponent },
    { path: 'souris', component:SourisComponent },
    { path: 'web_cam', component:WebCamComponent },
    { path: 'tablette_tactile', component:TabletteTactileComponent },
    { path: 'Home', component:ProductListComponent },
    { path: 'contact', component:ContactComponent },
    { path: 'Propos', component:AProposComponent }, 
    { path: 'not-found', component:NotFoundComponent},
    { path: 'Promotion', component:PromotionsComponent},
    {path:'cart',component:ShoppingCartComponent},
    { path:'login', component:LoginComponent}

    
   ]

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {


} 



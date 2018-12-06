import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrdinateurDeBureauComponent } from './components/ordinateur/ordinateur-de-bureau/ordinateur-de-bureau.component';
import { PCComponent } from './components/ordinateur/pc/pc.component';
import { DisquesInternesComponent } from './components/stockage/disques-internes/disques-internes.component';
import { DisquesExternesComponent } from './components/stockage/disques-externes/disques-externes.component';
import { CleUSBComponent } from './components/stockage/cle-usb/cle-usb.component';
import { CarteMemoireComponent } from './components/stockage/carte-memoire/carte-memoire.component';
import { ScannerComponent } from './components/Impression/scanner/scanner.component';
import { ImprimanteComponent } from './components/Impression/imprimante/imprimante.component';
import { PhotocopieurComponent } from './components/Impression/photocopieur/photocopieur.component';
import { ProcesseurComponent } from './components/Composants-Informatiques/processeur/processeur.component';
import { VentilateurComponent } from './components/Composants-Informatiques/ventilateur/ventilateur.component';
import { CarteMereComponent } from './components/Composants-Informatiques/carte-mere/carte-mere.component';
import { CarteGraphiqueComponent } from './components/Composants-Informatiques/carte-graphique/carte-graphique.component';
import { SourisComponent } from './components/Peripheriques-Accessoires/Péripheriques/souris/souris.component';
import { ClavierComponent } from './components/Peripheriques-Accessoires/Péripheriques/clavier/clavier.component';
import { WebCamComponent } from './components/Peripheriques-Accessoires/Péripheriques/web-cam/web-cam.component';
import { CasquesComponent } from './components/Peripheriques-Accessoires/Péripheriques/casques/casques.component';
import { ManetteComponent } from './components/Peripheriques-Accessoires/Péripheriques/manette/manette.component';
import { SacPCComponent } from './components/Peripheriques-Accessoires/Accessoires/sac-pc/sac-pc.component';
import { TapisComponent } from './components/Peripheriques-Accessoires/Accessoires/tapis/tapis.component';
import { LampeComponent } from './components/Peripheriques-Accessoires/Accessoires/lampe/lampe.component';
import { TabletteTactileComponent } from './components/ordinateur/tablette-tactile/tablette-tactile.component';
import { ContactComponent } from './components/contact/contact.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ProductListComponent,
    OrdinateurDeBureauComponent,
    PCComponent,
    DisquesInternesComponent,
    DisquesExternesComponent,
    CleUSBComponent,
    CarteMemoireComponent,
    ScannerComponent,
    ImprimanteComponent,
    PhotocopieurComponent,
    ProcesseurComponent,
    VentilateurComponent,
    CarteMereComponent,
    CarteGraphiqueComponent,
    SourisComponent,
    ClavierComponent,
    WebCamComponent,
    CasquesComponent,
    ManetteComponent,
    SacPCComponent,
    TapisComponent,
    LampeComponent,
    TabletteTactileComponent,
    ContactComponent,
    AProposComponent,
    NotFoundComponent,
    LoginComponent,
    SingleProductComponent

    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

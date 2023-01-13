import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CardsGaleriaComponent } from './components/cards-galeria/cards-galeria.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaEmpresaComponent } from './components/pages/galeria-empresa/galeria-empresa.component';
import { GaleriaPokemonComponent } from './components/pages/galeria-filmes/galeria-pokemon.component';
import { PokemonComponent } from './components/pages/galeria-filmes/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardsGaleriaComponent,
    FooterComponent,
    GaleriaEmpresaComponent,
    GaleriaPokemonComponent,
    PokemonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
  ],
})
export class AppModule {}

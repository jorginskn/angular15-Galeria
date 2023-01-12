import { GaleriaFilmesComponent } from './components/pages/galeria-filmes/galeria-filmes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsGaleriaComponent } from './components/cards-galeria/cards-galeria.component';
import { GaleriaEmpresaComponent } from './components/pages/galeria-empresa/galeria-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: CardsGaleriaComponent,
  },
  {
    path: 'empresa',
    component: GaleriaEmpresaComponent,
  },
  {
    path: 'filmes',
    component: GaleriaFilmesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

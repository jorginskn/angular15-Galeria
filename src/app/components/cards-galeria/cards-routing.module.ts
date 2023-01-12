import { CardsGaleriaComponent } from './cards-galeria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

CardsGaleriaComponent;
const routes: Routes = [{ path: '/', component: CardsGaleriaComponent }, {path: '/' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

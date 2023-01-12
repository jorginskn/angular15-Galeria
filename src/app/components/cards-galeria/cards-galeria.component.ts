import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-galeria',
  templateUrl: './cards-galeria.component.html',
  styleUrls: ['./cards-galeria.component.css'],
})
export class CardsGaleriaComponent {
  constructor(private router: Router) {}
}

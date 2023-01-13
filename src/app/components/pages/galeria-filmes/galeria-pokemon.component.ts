import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Subscription, Observable } from 'rxjs';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonImage } from 'src/models/pokemonImage.model';

@Component({
  selector: 'app-galeria-pokemon',
  templateUrl: './galeria-pokemon.component.html',
  styleUrls: ['./galeria-pokemon.component.css'],
})
export class GaleriaPokemonComponent {
  constructor(private pokemonService: PokemonService) {}

  pokemonData!: Pokemon[];
  pokemonImage!: string;
  pokemonId!: number;
  pokemonIdImage!: [];

  ngOnInit(): void {
    this.getDataPokemon();
  }

  getDataPokemon() {
    this.pokemonService.getDataPokemon().subscribe((res) => {
      this.pokemonData = res.results;
    });

    this.pokemonService.getPokemonImage(33).subscribe((res) => {
      for (let i = 0; i <= 50; i++) {
        this.pokemonId = res.id;
        
        this.pokemonId++;
      }

      this.pokemonImage = res.sprites.other.dream_world.front_default;
    });
  }
}

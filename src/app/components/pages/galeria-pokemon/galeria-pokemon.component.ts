import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import {
  Subscription,
  Observable,
  map,
  toArray,
  flatMap,
  range,
  distinct,
} from 'rxjs';
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
  pokemonIdImageArray: { id: number; image: string }[] = [];

  ngOnInit() {
    this.getDataPokemon();
  }

  async getDataPokemon() {
    this.pokemonService.getDataPokemon().subscribe((res) => {
      this.pokemonData = res.results;
      this.getPokemonImages();
    });
  }

  getPokemonImages() {
    const source = range(1, 50).pipe(
      flatMap((i) => this.pokemonService.getPokemonImage(i)),
      map((res) => {

        return {
          id: res.id,
          image: res.sprites.other.dream_world.front_default,
        };
      }),
      distinct((item: { id: number; image: string }) => item.id)
      );

    source.pipe(toArray()).subscribe((images) => {
      this.pokemonIdImageArray = images;
    });
  }
  
  getPokemonImage(id: number): string {
    const image = this.pokemonIdImageArray.find((img) => img.id === id);
    return image ? image.image : '';
  }
}

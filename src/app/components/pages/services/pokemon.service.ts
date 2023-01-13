import { PokemonImage } from './../../../../models/pokemonImage.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getDataPokemon(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(
      `https://pokeapi.co/api/v2/pokemon/`
    );
  }

  getPokemonImage(id: number): Observable<PokemonImage> {


    return this.httpClient.get<PokemonImage>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
  }
}

interface Pokemon {
  name: string;
  url: string;
}

interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

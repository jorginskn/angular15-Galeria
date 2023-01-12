import { ImdbFilmModel } from './imdb-filmes.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private apiKey: string = 'k_x95r3i9b';
  baseUrl: string = 'http://localhost:4000/items';
  baseUrlPoster: string = `https://imdb-api.com/en/API/MostPopularMovies/${this.apiKey}`;
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ImdbFilmModel[]> {
    return this.httpClient.get<ImdbFilmModel[]>(this.baseUrl);
  }

  // getPosters(id: string): Observable<any> {
  //   console.log('aqui');
  //   return this.httpClient.get<any>(this.baseUrlPoster + id);
  // }

  // putPosters(id: string, body: any) {
  //   console.log('aqui');
  //   return this.httpClient
  //     .put(`${this.baseUrl}/${id}`, body)
  //     .subscribe((data) => {
  //       return data;
  //     });
  // }
}

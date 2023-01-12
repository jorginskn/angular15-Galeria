import { Component } from '@angular/core';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-galeria-filmes',
  templateUrl: './galeria-filmes.component.html',
  styleUrls: ['./galeria-filmes.component.css'],
})
export class GaleriaFilmesComponent {
  public movies: any = [];
  currentMovie = 0;

  constructor(private imdb: ImdbService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.imdb.getData().subscribe((data: any) => {
      data.forEach((item: any) => {
        this.movies.push(item);
        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
      });
      /*       this.movies.forEach((movie: any) => {
        this.imdb.getPosters(movie.id).subscribe((data) => {
          console.log(data);
          movie.image = data.posters[0].link;
          this.imdb.putPosters(movie.id, movie);
          return;
        });
      });
      console.log(this.movies); */
    });
  }
}

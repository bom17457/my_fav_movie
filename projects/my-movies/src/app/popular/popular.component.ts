import { Component, OnInit } from '@angular/core';
import { movie } from '../moviedb/movie';
import { MovieService } from '../moviedb/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.sass']
})
export class PopularComponent implements OnInit {
  movies: movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopular();
  }

  getPopular(): void {
    this.movieService.getPopular().subscribe(popular => {
      this.movies = popular.results
    }, error => {

    });
  }

}

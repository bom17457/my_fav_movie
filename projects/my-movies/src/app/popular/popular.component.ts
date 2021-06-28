import { Component, OnInit } from '@angular/core';
import { MovieService } from '../moviedb/movie.service';
import { popular } from '../moviedb/movies';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.sass']
})
export class PopularComponent implements OnInit {
  popular?: popular;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopular();
  }

  getPopular(): void {
    this.movieService.getPopular().subscribe(popular => {
      (this.popular = popular)
      console.log(popular)
    }, error => {

    });
  }

}

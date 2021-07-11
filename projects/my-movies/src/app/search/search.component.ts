import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../moviedb/movie';
import { MovieService } from '../moviedb/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  result: movie[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getSearch(params);
    })
  }

  getSearch(params: any): void {
    this.movieService.search(params).subscribe((res) => {
      this.result = res.results;
    })
  }

}

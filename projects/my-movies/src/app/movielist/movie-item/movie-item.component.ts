import { Component, Input, OnInit } from '@angular/core';
import { movie } from '../../moviedb/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit {
  @Input() movie?: movie | null = null
  

  constructor() { }

  ngOnInit(): void {
  }

  add_favorite() {
    console.log(this.movie)
  }

  add_watchlist() {
    console.log(this.movie)
  }

  check_favorite() {
    
  }

}

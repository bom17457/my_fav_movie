import { Component, Input, OnInit } from '@angular/core';
import { movie } from '../moviedb/movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.sass']
})
export class MovielistComponent implements OnInit {
  @Input() movies: movie[] = [];

  constructor() { }

  ngOnInit(): void { }

}

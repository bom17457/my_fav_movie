import { Component, Input, OnInit } from '@angular/core';
import { popular } from '../moviedb/movies';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.sass']
})
export class MovielistComponent implements OnInit {
  @Input() movies: popular | undefined;

  constructor() { }

  ngOnInit(): void { }

}

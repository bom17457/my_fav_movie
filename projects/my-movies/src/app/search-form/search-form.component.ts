import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { discovery_query } from '../moviedb/discovery';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    let query = {
      include_adult: true,
      sort_by: "popularity.asc",
    } as discovery_query

    this.router.navigate(['/search'], {
      relativeTo: this.route, queryParams: query
    })
  }
}

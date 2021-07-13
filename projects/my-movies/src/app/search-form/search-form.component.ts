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
  sort_by = [
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "release_date.asc", label: "Release Ascending" },
    { value: "release_date.desc", label: "Release Descending" },
    { value: "revenue.asc", label: "Revernue Ascending" },
    { value: "revenue.desc", label: "Revernue Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "original_title.asc", label: "Title(A-Z)" },
    { value: "original_title.desc", label: "Title(Z-A)" },
    { value: "vote_count.asc", label: "Vote Count Ascending" },
    { value: "vote_count.desc", label: "Vote Count Descending" }
  ]

  searchForm = this.fb.group({
    sort_by: ['vote_count.asc'],
    include_adult: [false]
  })

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    let query = this.searchForm.value as discovery_query
    this.router.navigate(['/search'], {
      relativeTo: this.route, queryParams: query
    })
  }
}

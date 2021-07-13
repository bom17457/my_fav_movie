import { Component, OnInit } from '@angular/core';
import { provider } from '../moviedb/provider';
import { WatchprovidersService } from '../moviedb/watchproviders.service';

@Component({
  selector: 'app-watch-provider',
  templateUrl: './watch-provider.component.html',
  styleUrls: ['./watch-provider.component.sass']
})
export class WatchProviderComponent implements OnInit {
  provider_list: provider[] = []
  constructor(private watchProviderService: WatchprovidersService) { }

  ngOnInit(): void {
    this.getWatchProviders()
  }

  getWatchProviders() {
    this.watchProviderService
    .getWatchProviders()
    .subscribe((res) => {
      this.provider_list = res.results;
    })
  }

}

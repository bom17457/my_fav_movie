import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { providers } from './provider';

@Injectable({
  providedIn: 'root'
})
export class WatchprovidersService {

  constructor(private http: HttpClient) { }

  getWatchProviders(): Observable<providers> {
    return this.http.get<providers>('/api/watch/providers/movie', {
      params: {
        watch_region: 'TH'
      }
    });
  }
}
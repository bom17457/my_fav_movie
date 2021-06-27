import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getTest() {
    return "hello service"
  }

  getPopular(): void { }
}

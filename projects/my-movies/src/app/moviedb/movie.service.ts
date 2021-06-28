import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { popular } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.log(error)
    
    if (error.status == 0) {
      // A client-side or network error
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }


    return throwError('Sorry, My bad; please try again later.')
  }

  getPopular(page: number = 1): Observable<popular> {

    const options = {
      params: new HttpParams().set("page", page),
    }
    return this.http.get<popular>("/api/movie/popular", options).pipe(retry(3), catchError(this.handleError));
  }
}

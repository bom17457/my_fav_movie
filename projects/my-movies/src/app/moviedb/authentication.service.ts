import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { request_token, session } from './request_token';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

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

  public login(user: user): Observable<request_token> {
    return this.request_token().pipe(
      map(data => data.request_token),
      switchMap((token) => {
        user.request_token = token;
        return this.http.post<request_token>('/api/authentication/token/validate_with_login', user)
      }),
      catchError(this.handleError));
  }

  public request_token() {
    return this.http.get<request_token>('/api/authentication/token/new')
      .pipe(
        catchError(this.handleError),
      )
  }

  public create_session(request_token: string): Observable<session> {
    return this.http.post<session>('/api//authentication/session/new', {
      request_token
    }).pipe(catchError(this.handleError))
  }
}

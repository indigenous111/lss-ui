import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Herotype } from '../../../ls/global/hero/type/models/herotype';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Define API
  apiURL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Fetch employee
  getHeroTypes(): Observable<Herotype []> {
    try {
      return this.http.get<Herotype []>(this.apiURL + '/lss/global/hero/types')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    } catch(e) {
      console.error('###### ' + e);
    }
  }

  createHeroType(type: string) {
     this.http.post(this.apiURL + '/lss/global/hero/type', type)
     .pipe(
       retry(1),
       catchError(this.handleError)
     );
  }

  deleteHeroType(type: string) {
    this.http.delete(this.apiURL + '/lss/global/hero/type/' + type)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

 //Error handling
 handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}

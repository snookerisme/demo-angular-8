import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

let httpOptions = {};

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private apiEndpoint = environment.API_HOST;

  constructor(
    private http: HttpClient,
  ) { }

  login(username, password) {

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    let param = {
      username: username,
      password: password
    }

    const uri = this.apiEndpoint + "/login";
    return this.http.post<any>(uri, param, httpOptions).pipe(
      tap(_ => console.log('login')),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(of(result as T))
      return of(result as T);
    };
  }
}

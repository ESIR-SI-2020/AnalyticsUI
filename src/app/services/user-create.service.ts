import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {
  // url pour post machine prod VM ISTIC
  private userUrl = 'http://148.60.11.161:8099/users';

  constructor(
     private http: HttpClient,
  ) { }

  createUser(
            userName: string,
            email: string,
            password: string,
            address: object
            ): Observable<any> {

    const body = {
          "username": userName,
          "email": email,
          "password": password,
          "address": address
    }
    console.log("user create service");
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json',
      })
    };

    return this.http.post<any>('http://148.60.11.161:8099/users', body, httpOptions)
    .pipe(
      tap(data => console.log('server data:', data)),
      catchError(this.handleError('getData'))
    );
  }
  private handleError(operation: string) {
    return (err: any) => {
        const errMsg = `error in ${operation}() retrieving ${this.userUrl}`;
        console.log(`${errMsg}:`, err);
        if (err instanceof HttpErrorResponse) {
            console.log(`status: ${err.status}, ${err.statusText}`);
        }
        return Observable.throw(errMsg);
    }
  }
}
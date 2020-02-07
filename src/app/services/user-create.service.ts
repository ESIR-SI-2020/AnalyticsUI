import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Address } from '../model/address/address';
@Injectable({
  providedIn: 'root'
})
export class UserCreateService {
  // url pour post machine prod VM ISTIC
  //private userUrl = 'http://148.60.11.161:8099/users';
  private userUrl = 'randomURL/users';
  

  constructor(
     private http: HttpClient,
  ) { }
  
  createUser(userName: String,
    email: String,
    password: String,
    address: Address): Observable<any>{
      
    const body = {
          name : userName,
          email : email,
          password : password,
          address : address
    }
    //console.log("user create service");
    return this.http.post<any>(this.userUrl, body).pipe(
      tap(data => console.log('server data:', data)), 
      catchError(this.handleError('getData'))
    );
  }
  private handleError(operation: String) {
    return (err: any) => {
        let errMsg = `error in ${operation}() retrieving ${this.userUrl}`;
        console.log(`${errMsg}:`, err)
        if(err instanceof HttpErrorResponse) {
            console.log(`status: ${err.status}, ${err.statusText}`);
        }
        return Observable.throw(errMsg);
    }
}
}


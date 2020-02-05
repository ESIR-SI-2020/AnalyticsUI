import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Address } from '../model/address/address';
@Injectable({
  providedIn: 'root'
})
export class UserCreateService {
  // url pour post machine prod VM ISTIC
  //private userUrl = 'http://148.60.11.161:8099/users';
  private userUrl = 'randomURL/users';
  
  body : String;
  constructor(
     private http: HttpClient,
  ) { }
  
  createUser(userName: String,
    email: String,
    password: String,
    address: Address): void{ //Observable<any>{
      /*
    this.body = JSON.stringify({
          "name" : userName,
          "email" : email,
          "password" : password,
          "address" : JSON.stringify(address)
    })
    return this.http.post<any>(this.userUrl, this.body);*/
    console.log("user create service");
  }
}


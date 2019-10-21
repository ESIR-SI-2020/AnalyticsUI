import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCaller {

  private pokemonUrl = environment.apiUrl;
  private defaultHeaders = new HttpHeaders({
    'Content-Type':  'application/json'
  })

  constructor(private http: HttpClient) { }

  private async call<T>(verb: string, url: string, header: HttpHeaders = this. defaultHeaders , params?: HttpParams): Promise<T> {
    try {
      return response = await this.http.request(verb, url, header)
        .toPromise();
    } catch(error) {
      //// TODO: error handling
    }
  }

  async get<T>(url: string, header?: HttpHeaders, params?: HttpParams): Promise<T> {
    return await this.call('GET', `${this.pokemonUrl}${url}`);
  }

  async post<T>(url: string, header?: HttpHeaders, params?: HttpParams): Promise<T> {
    return null;
  }


}

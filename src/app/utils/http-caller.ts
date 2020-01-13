import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCaller {

  private pokemonUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async get(url: string, id?: string): Promise<any> {
    return await this.http.get<any>(`${this.pokemonUrl}${url}`).toPromise();
  }

}

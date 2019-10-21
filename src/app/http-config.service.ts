import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  private pokemonUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async getPokemons(url: string = "/pokemon"){
    let result;
    const response = await this.http.request('GET', `${this.pokemonUrl}${url}`)
      .toPromise()
      .then(data => {
        result = data["results"];
      });
    return result;
  }

  async getPokemon(url: string = "/pokemon", id: string){
    let result;
    const response = await this.http.request('GET', `${this.pokemonUrl}${url}/${id}`)
      .toPromise()
      .then(data => {
        result = data;
      });
    return result;
  }
}

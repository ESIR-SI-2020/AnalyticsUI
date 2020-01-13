import { Injectable } from '@angular/core';

import { HttpCaller } from '../../utils/http-caller';

@Injectable({providedIn : 'root'})
export class PokemonService {

  constructor(private http: HttpCaller) { }

  getPokemon(name: string): any{
    return this.http.get('/pokemon/' + name)
  }

  getPokemons(): any {
    return this.http.get('/pokemon')
  }
}

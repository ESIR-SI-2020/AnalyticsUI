import { Injectable } from '@angular/core';

import { HttpCaller } from '../../utils/http-caller';
import { environment} from '../../../environments/environment';

@Injectable({providedIn : 'root'})
export class PokemonService {

  private pokemonUrl = environment.pokemonUrl;

  constructor(private http: HttpCaller) { }

  getPokemon(name: string): any{
    return this.http.get('/pokemon/' + name, this.pokemonUrl)
  }

  getPokemons(): any {
    return this.http.get('/pokemon', this.pokemonUrl)
  }
}

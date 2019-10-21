import { Injectable } from '@angular/core';
import { HttpCaller } from '../http-caller.service';

@Injectable({providedIn : 'root'})
export class PokemonService {

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpCaller) { }

  getPokemon(id: string = "") {
    return this.http.get('/pokemon/' + id)
  }
}

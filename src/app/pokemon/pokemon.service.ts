import { Injectable } from '@angular/core';
import { HttpConfigService } from '../http-config.service';

@Injectable({providedIn : 'root'})
export class PokemonService {

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

  configUrl = 'assets/config.json';

  constructor(private http : HttpConfigService) { }

  getPokemons() {
    return this.http.getPokemons("/pokemon");
  }

  getPokemon(id:string) {
    return this.http.getPokemon("/pokemon",id)
  }
}

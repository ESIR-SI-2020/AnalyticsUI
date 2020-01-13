import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon(this.route.snapshot.paramMap.get("pokemonName")).then(data => this.pokemon = data);
  }

}

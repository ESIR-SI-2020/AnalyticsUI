import { Component } from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  formatOne = (percent: number) => `${percent} Days`;
}

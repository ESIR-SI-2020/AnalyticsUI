import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import {ArticleListComponent} from './article/article-list/article-list.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:pokemonName', component: PokemonDetailsComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:pokemonName', component: PokemonDetailsComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  { path: 'createArticle', component: CreateArticleComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

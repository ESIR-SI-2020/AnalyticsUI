import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './article/article-list/article-list.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'pokemons/:pokemonName', component: PokemonDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

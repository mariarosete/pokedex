import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { PokemonListComponent } from './features/pokemons/components/pokemon-list/pokemon-list.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pokemons', component: PokemonListComponent },
  {
    path: 'pokemons/:id',
    loadComponent: () =>
      import('./features/pokemons/components/pokemon-detail/pokemon-detail.component').then(
        (m) => m.PokemonDetail
      ),
  },
];

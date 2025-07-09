import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pokemons.module').then(m => m.PokemonsModule)
  },
  { path: '**', redirectTo: 'pokemons' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule  {}

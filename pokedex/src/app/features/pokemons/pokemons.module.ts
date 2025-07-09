import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { pokemonReducer } from './state/pokemon.reducer';
import { PokemonEffects } from './state/pokemon.effects';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PokemonListComponent } from '../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonDetail } from '../pokemons/components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonsRoutingModule,
    StoreModule.forFeature('pokemons', pokemonReducer),
    EffectsModule.forFeature([PokemonEffects]),
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PokemonListComponent, 
    PokemonDetail         
  ]
})
export class PokemonsModule {}

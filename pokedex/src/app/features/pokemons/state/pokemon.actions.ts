import { createAction, props } from '@ngrx/store';
import { PokemonDetail } from '../models/pokemon.model';

export const loadPokemons = createAction('[Pokemon] Load Pokemons');
export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Pokemons Success',
  props<{ list: PokemonDetail[] }>()
);
export const loadPokemonsFailure = createAction(
  '[Pokemon] Load Pokemons Failure',
  props<{ error: string }>()
);

export const loadPokemonById = createAction(
  '[Pokemon] Load Pokemon By Id',
  props<{ id: number }>()
);
export const loadPokemonByIdSuccess = createAction(
  '[Pokemon] Load Pokemon By Id Success',
  props<{ pokemon: PokemonDetail }>()
);
export const loadPokemonByIdFailure = createAction(
  '[Pokemon] Load Pokemon By Id Failure',
  props<{ error: string }>()
);
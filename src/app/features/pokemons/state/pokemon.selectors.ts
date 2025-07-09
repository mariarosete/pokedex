import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../models/pokemon.model';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemonList = createSelector(
  selectPokemonState,
  (state) => state.list
);

export const selectSelectedPokemon = createSelector(
  selectPokemonState,
  (state) => state.selectedPokemon
);

export const selectLoading = createSelector(
  selectPokemonState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectPokemonState,
  (state) => state.error
);


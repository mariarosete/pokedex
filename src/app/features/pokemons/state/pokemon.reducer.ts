import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.actions';
import { PokemonState } from '../models/pokemon.model';

export const initialState: PokemonState = {
  list: [],
  selectedPokemon: null,
  loading: false,
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemons, (state) => ({ ...state, loading: true, error: null })),
  on(PokemonActions.loadPokemonsSuccess, (state, { list }) => ({ ...state, list, loading: false })),
  on(PokemonActions.loadPokemonsFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(PokemonActions.loadPokemonById, (state) => ({ ...state, loading: true, error: null })),
  on(PokemonActions.loadPokemonByIdSuccess, (state, { pokemon }) => ({ ...state, selectedPokemon: pokemon, loading: false })),
  on(PokemonActions.loadPokemonByIdFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
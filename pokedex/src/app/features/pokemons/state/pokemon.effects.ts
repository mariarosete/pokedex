import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PokemonActions from './pokemon.actions';
import { PokemonService } from '../services/pokemon.service';
import { catchError, map, mergeMap, of, forkJoin } from 'rxjs';
import { PokemonDetail } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonEffects {
  private actions$ = inject(Actions);
  private pokemonService = inject(PokemonService);

  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      mergeMap(() =>
        this.pokemonService.getPokemons().pipe(
          mergeMap((res: any) => {
            if (!res.results) {
              return of(
                PokemonActions.loadPokemonsFailure({
                  error: 'Invalid response from API',
                })
              );
            }

            const detailCalls = res.results.map((p: any) =>
              this.pokemonService.getPokemonByIdFromUrl(p.url)
            );

            return forkJoin(detailCalls as Observable<PokemonDetail>[]).pipe(
              map((pokemons) =>
                PokemonActions.loadPokemonsSuccess({ list: pokemons })
              ),
              catchError((error) =>
                of(PokemonActions.loadPokemonsFailure({ error: error.message }))
              )
            );
          }),
          catchError((error) =>
            of(PokemonActions.loadPokemonsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadPokemonById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemonById),
      mergeMap(({ id }) =>
        this.pokemonService.getPokemonById(id).pipe(
          map((data) =>
            PokemonActions.loadPokemonByIdSuccess({
              pokemon: {
                id: data.id,
                name: data.name,
                types: data.types.map((t: any) => t.type.name),
                image: data.sprites.front_default,
              },
            })
          ),
          catchError((error) =>
            of(PokemonActions.loadPokemonByIdFailure({ error: error.message }))
          )
        )
      )
    )
  );
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokemonDetail } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=12');
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }


  getPokemonByIdFromUrl(url: string): Observable<PokemonDetail> {
    return this.http.get<any>(url).pipe(
      map((data) => ({
        id: data.id,
        name: data.name,
        types: data.types.map((t: any) => t.type.name),
        image: data.sprites.front_default,
      }))
    );
  }
}

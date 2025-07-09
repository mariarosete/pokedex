import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../../models/pokemon.model';
import { loadPokemons } from '../../state/pokemon.actions';
import { selectPokemonList } from '../../state/pokemon.selectors';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons$!: Observable<PokemonDetail[]>;
  selectedType = '';

  types = ['fire', 'water', 'grass', 'bug', 'poison', 'flying'];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.pokemons$ = this.store.select(selectPokemonList);
    this.store.dispatch(loadPokemons());
  }

  shouldShow(pokemon: PokemonDetail): boolean {
    return (
      !this.selectedType || pokemon.types.includes(this.selectedType)
    );
  }
}

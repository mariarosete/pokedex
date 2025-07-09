import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetail implements OnInit {
  pokemonId!: number;
  pokemon:
    | {
        id: number;
        name: string;
        types: string[];
        height: string;
        weight: string;
        ability: string;
        image: string;
      }
    | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));

    this.pokemonService.getPokemonById(this.pokemonId).subscribe(data => {
      this.pokemon = {
        id: data.id,
        name: data.name,
        types: data.types.map((t: any) => t.type.name),
        height: (data.height / 10).toFixed(1) + ' m',
        weight: (data.weight / 10).toFixed(1) + ' kg',
        ability: data.abilities[0].ability.name,
        image: data.sprites.front_default
      };
    });
  }
}

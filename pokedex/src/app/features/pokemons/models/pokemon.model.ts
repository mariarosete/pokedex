
export interface PokemonDetail {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export interface PokemonState {
  list: PokemonDetail[];
  selectedPokemon: PokemonDetail | null;
  loading: boolean;
  error: string | null;
}

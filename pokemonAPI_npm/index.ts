import axios from "axios";
import { Pokemon } from "./pokemon";

export const pokemonAPI = {
  async getPokemon(name?: string, id?: number): Promise<Pokemon> {
    if (!name && !id) {
      throw new Error("You must provide a Pokémon name or Pokémon ID.");
    }
    try {
      const request = await axios(
        `https://saverioscagnoli.github.io/PokemonAPI/pokemon/${
          name ? name : id
        }.json`
      );
      const pokemon: Pokemon = request.data;
      return pokemon;
    } catch (e) {
      throw e;
    }
  },
};

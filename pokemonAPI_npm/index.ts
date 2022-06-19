import axios from "axios";
import { Ability } from "./ability";
import { Pokemon } from "./pokemon";
const pokemonAPI = {
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
  async getAbility(name?: string, id?: number): Promise<Ability> {
    try {
      const request = await axios(
        `https://saverioscagnoli.github.io/PokemonAPI/ability/${
          name ? name : id
        }.json`
      );
      const ability: Ability = request.data;
      return ability;
    } catch (e) {
      throw e;
    }
  },
  async getMove(name?: string, id?: number): Promise<Ability> {
    try {
      const request = await axios(
        `https://saverioscagnoli.github.io/PokemonAPI/move/${
          name ? name : id
        }.json`
      );
      const ability: Ability = request.data;
      return ability;
    } catch (e) {
      throw e;
    }
  },
};

export { pokemonAPI, Pokemon, Ability };

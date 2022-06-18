import { Ability } from "./ability";

interface IPokemonAbility {
  ability: Ability;
  hidden: boolean;
  mega_only?: boolean;
}

interface IPokemonGenderRatio {
  male: number;
  female: number;
  genderless?: boolean;
}

interface IPokemonBaseStats {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

interface IPokemonEvolution {
  name: string;
  mode: {
    type: string;
    level?: number;
    stone?: string;
    trade?: boolean;
    held_item?: string;
    happiness?: number;
    time?: "day" | "night" | "sunset";
    location?: string;
  };
}

interface IPokemonChain {
  base_form: string;
  first_evolution: IPokemonEvolution;
  second_evolution?: IPokemonEvolution;
}

interface IPokemonData {
  catch_rate: number;
  weight: number;
  height: number;
  pokedex_color: string;
}

interface IPokemon {
  name: string;
  types: string[];
  index: number;
  abilities: IPokemonAbility[];
  gender_ratio: IPokemonGenderRatio;
  base_stats: IPokemonBaseStats;
  data: IPokemonData;
  evolution_chain: IPokemonChain[];
  generation: number;
  learned_moves: string[];
}

class Pokemon implements IPokemon {
  name: string;
  types: string[];
  index: number;
  abilities: IPokemonAbility[];
  gender_ratio: IPokemonGenderRatio;
  base_stats: IPokemonBaseStats;
  data: IPokemonData;
  evolution_chain: IPokemonChain[];
  generation: number;
  learned_moves: string[];
  constructor(
    name: string,
    types: string[],
    index: number,
    abilities: IPokemonAbility[],
    gender_ratio: IPokemonGenderRatio,
    base_stats: IPokemonBaseStats,
    data: IPokemonData,
    evolution_chain: IPokemonChain[],
    generation: number,
    learned_moves: string[]
  ) {
    this.name = name;
    this.types = types;
    this.index = index;
    this.abilities = abilities;
    this.gender_ratio = gender_ratio;
    this.base_stats = base_stats;
    this.data = data;
    this.evolution_chain = evolution_chain;
    this.generation = generation;
    this.learned_moves = learned_moves;
  }
}

export { Pokemon };

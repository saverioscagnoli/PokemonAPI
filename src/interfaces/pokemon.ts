import { Ability } from "./ability";

interface IPokemonAbility {
  ability: Ability;
  hidden: boolean;
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
    type: string | null;
    level?: number | null;
    gender?: string | null;
    stone?: string | null;
    trade?: boolean | null;
    held_item?: string | null;
    move?: string | null;
    happiness?: number | null;
    affection?: number | null;
    needs_rain?: boolean | null;
    beauty?: number | null;
    time?: "Day" | "Night" | "" | null;
    location?: string | null;
  };
}

interface IPokemonChain {
  base_form: string;
  first_evolution: IPokemonEvolution | null;
  second_evolution?: IPokemonEvolution | null;
}

interface IPokemonData {
  catch_rate: number;
  weight: number;
  height: number;
  pokedex_color: string;
  is_legendary: boolean;
  is_mythic: boolean;
}

interface ILearnedMoves {
  name: string;
  level?: number;
  TM?: boolean;
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
  generation: string;
  learned_moves: ILearnedMoves[];
  sprite: string;
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
  generation: string;
  learned_moves: ILearnedMoves[];
  sprite: string;
  constructor(
    name: string,
    types: string[],
    index: number,
    base_stats: IPokemonBaseStats,
    data: IPokemonData,
    generation: string,
    abilities: IPokemonAbility[],
    evolution_chain: IPokemonChain[],
    learned_moves: ILearnedMoves[],
    gender_ratio: IPokemonGenderRatio,
    sprite: string
  ) {
    this.name = name;
    this.types = types;
    this.index = index;
    this.base_stats = base_stats;
    this.data = data;
    this.generation = generation;
    this.abilities = abilities;
    this.evolution_chain = evolution_chain;
    this.learned_moves = learned_moves;
    this.gender_ratio = gender_ratio;
    this.sprite = sprite;
  }
}

export { Pokemon };

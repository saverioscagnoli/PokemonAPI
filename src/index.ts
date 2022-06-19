import { writeFile } from "fs";
import { EvolutionClient, PokemonClient } from "pokenode-ts";
import { getAllAbilities } from "./data/abilities";
import { getAllMoves } from "./data/moves";
import { Pokemon } from "./interfaces/pokemon";
import { sAbility } from "./utils";

const api = new PokemonClient();
const evoApi = new EvolutionClient();

async function start() {
  await getAllAbilities();
  await getAllMoves();
  for (let i = 1; i <= 898; i++) {
    const data = await api.getPokemonById(i);
    const species = await api.getPokemonSpeciesById(i);
    const evoId = species.evolution_chain.url.split(
      "/"
    )[6] as unknown as number;
    let evoChain = (await evoApi.getEvolutionChainById(evoId)).chain;
    const pokemon = new Pokemon(
      data.name,
      data.types.map((t) => t.type.name),
      data.id,
      {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      },
      {
        catch_rate: species.capture_rate,
        weight: data.weight,
        height: data.height,
        pokedex_color: species.color.name,
        is_legendary: species.is_legendary,
        is_mythic: species.is_mythical,
      },
      species.generation.name.split("-")[1],
      [],
      [],
      [],
      {
        male: ((8 - species.gender_rate) / 8) * 100,
        female: (species.gender_rate / 8) * 100,
      }
    );
    for (let i = 0; i < data.abilities.length; i++) {
      pokemon.abilities[i] = {
        ability: sAbility(data.abilities[i].ability.name),
        hidden: data.abilities[i].is_hidden,
      };
    }
    for (let i = 0; i < evoChain.evolves_to.length; i++) {
      const evo = evoChain.evolves_to[i];
      pokemon.evolution_chain.push({
        base_form: evoChain.species.name,
        first_evolution: {
          name: evo.species.name,
          mode: {
            type: evo.evolution_details[0]?.trigger?.name,
            level: evo.evolution_details[0]?.min_level,
            gender:
              evo.evolution_details[0]?.gender == 1
                ? "female"
                : evo.evolution_details[0]?.gender == 2
                ? "male"
                : evo.evolution_details[0]?.gender == 3
                ? "genderless"
                : null,
            stone: evo.evolution_details[0]?.item?.name,
            trade:
              evo.evolution_details[0]?.trigger?.name == "trade" ? true : false,
            held_item: evo.evolution_details[0]?.held_item?.name,
            move: evo.evolution_details[0]?.known_move?.name,
            happiness: evo.evolution_details[0]?.min_happiness,
            affection: evo.evolution_details[0]?.min_affection,
            needs_rain: evo.evolution_details[0]?.needs_overworld_rain,
            beauty: evo.evolution_details[0]?.min_beauty,
            time: evo.evolution_details[0]?.time_of_day,
            location: evo.evolution_details[0]?.location?.name,
          },
        },
        second_evolution: null,
      });
      if (evo.evolves_to.length > 0) {
        for (let k = 0; k < evo.evolves_to.length; k++) {
          pokemon.evolution_chain[i].second_evolution = {
            name: evo.evolves_to[k].species.name,
            mode: {
              type: evo.evolves_to[k].evolution_details[0].trigger.name,
              level: evo.evolves_to[k].evolution_details[0]?.min_level,
              gender:
                evo.evolves_to[k].evolution_details[0]?.gender == 1
                  ? "female"
                  : evo.evolves_to[k].evolution_details[0]?.gender == 2
                  ? "male"
                  : evo.evolves_to[k].evolution_details[0]?.gender == 3
                  ? "genderless"
                  : null,
              stone: evo.evolves_to[k].evolution_details[0]?.item?.name,
              trade:
                evo.evolves_to[k].evolution_details[0]?.trigger?.name == "trade"
                  ? true
                  : false,
              held_item:
                evo.evolves_to[k].evolution_details[0]?.held_item?.name,
              move: evo.evolves_to[k].evolution_details[0]?.known_move?.name,
              happiness: evo.evolves_to[k].evolution_details[0]?.min_happiness,
              affection: evo.evolves_to[k].evolution_details[0]?.min_affection,
              needs_rain:
                evo.evolves_to[k].evolution_details[0]?.needs_overworld_rain,
              beauty: evo.evolves_to[k].evolution_details[0]?.min_beauty,
              time: evo.evolves_to[k].evolution_details[0]?.time_of_day,
              location: evo.evolves_to[k].evolution_details[0]?.location?.name,
            },
          };
        }
      }
    }
    for (let i = 0; i < data.moves.length; i++) {
      pokemon.learned_moves.push(data.moves[i].move.name);
    }
    writeFile(`${pokemon.name}.json`, JSON.stringify(pokemon), (e) => {
      if (e) throw e;
      else {
        console.log(`${pokemon.name}.json created!`);
      }
    });
  }
}

start();

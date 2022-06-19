import { writeFile } from "fs";
import { MoveClient, PokemonClient } from "pokenode-ts";
import { Move } from "../interfaces/move";

const api = new MoveClient();
const Moves: Move[] = [];

async function getAllMoves() {
  for (let i = 1; i <= 826; i++) {
    const fetch = await api.getMoveById(i);
    const move = new Move(
      fetch.name,
      fetch.type.name,
      fetch.damage_class.name,
      {
        base_pp: fetch.pp,
        power: fetch.power,
        accuracy: fetch.accuracy,
        priority: fetch.priority,
        crit_rate: fetch.meta.crit_rate,
        healing: fetch.meta.healing,
        effect_chance: fetch.effect_chance,
        multistrike: {
          min_hits: null,
          max_hits: null,
        },
        multiturn: {
          min_turns: null,
          max_turns: null,
        },
        stats_changes: [],
        status_changes: {
          status: null,
        },
        additional_effects: {
          stats_changes: [],
          status_changes: {
            status: null,
          },
        },
      }
    );
    if (fetch.meta.min_hits) {
      move.in_fight.multistrike.min_hits = fetch.meta.min_hits;
      move.in_fight.multistrike.max_hits = fetch.meta.max_hits;
    }
    if (fetch.meta.min_turns) {
      move.in_fight.multiturn.min_turns = fetch.meta.min_turns;
      move.in_fight.multiturn.max_turns = fetch.meta.max_turns;
    }
    if (fetch.stat_changes.length > 0 && fetch.damage_class.name == "status") {
      for (let i = 0; i < fetch.stat_changes.length; i++) {
        move.in_fight.stats_changes.push({
          changed: fetch.stat_changes[i].stat.name,
          modifier: fetch.stat_changes[i].change,
        });
      }
    } else if (
      fetch.stat_changes.length > 0 &&
      fetch.damage_class.name != "status"
    ) {
      for (let i = 0; i < fetch.stat_changes.length; i++) {
        move.in_fight.additional_effects.stats_changes.push({
          changed: fetch.stat_changes[i].stat.name,
          modifier: fetch.stat_changes[i].change,
        });
      }
    }
    if (
      fetch.meta.ailment.name != "none" &&
      fetch.damage_class.name == "status"
    ) {
      move.in_fight.status_changes.status = fetch.meta.ailment.name;
    } else if (
      fetch.meta.ailment.name != "none" &&
      fetch.damage_class.name == "status"
    ) {
      move.in_fight.additional_effects.status_changes.status =
        fetch.meta.ailment.name;
    }
    Moves.push(move);
    writeFile(`${move.name}.json`, JSON.stringify(move), (e) => {
      if (e) throw e;
      else console.log(`${move.name}.json written`);
    })
  }
  return Moves;
}

export { Moves, getAllMoves };

import { Abilities } from "./data/abilities";
import { Moves } from "./data/moves";

function sAbility(name: string) {
  return Abilities.find((ability) => ability.name === name);
}

function sMove(name: string) {
  return Moves.find((move) => move.name);
}

export { sAbility, sMove };

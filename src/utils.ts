import { Abilities } from "./data/abilities";

export function sAbility(name: string) {
  return Abilities.find((ability) => ability.name === name);
}

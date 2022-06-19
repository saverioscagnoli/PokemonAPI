import { PokemonClient } from "pokenode-ts";
import { Ability } from "../interfaces/ability";

const Abilities: Ability[] = [];
const api = new PokemonClient();

async function getAllAbilities() {
  for (let i = 1; i <= 267; i++) {
    const data = await api.getAbilityById(i);
    Abilities.push(
      new Ability(
        data.name,
        data.flavor_text_entries.find((e) => {
          if (
            e.version_group.name == "sword-shield" &&
            e.language.name == "en"
          ) {
            return e.flavor_text;
          }
        }).flavor_text,
        data.id,
        data.generation.name.split("-")[1]
      )
    );
    console.log(`Abilities: ${i}`);
  }
  console.log(`Abilities Done!`);
  return Abilities;
}

export { Abilities, getAllAbilities };

import { Ability } from "../interfaces/ability";

const Abilities: Ability[] = [
  new Ability(
    "Overgrow",
    "Powers up Grass-type moves when the Pokémon's HP is low.",
    { description: "The Pokémon must be at 1/3 or less of its HP." },
    { stat: [{ changed: "Attack or Special Attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Chlorophyll",
    "Boosts the Pokémon's Speed stat in harsh sunlight.",
    {
      description: "The weather must be harsh sunlight.",
      weather: "harsh sunlight",
    },
    { stat: [{ changed: "Speed", modifier: 2 }] }
  ),
  new Ability(
    "Thick Fat",
    "The Pokémon is protected by a layer of thick fat, which halves the damage taken from Fire- and Ice-type moves.",
    { description: "The Pokémon must be mega evolved." }
  ),
  new Ability(
    "Blaze",
    "Powers up Fire-type moves when the Pokémon's HP is low.",
    { description: "The Pokémon must be at 1/3 or less of its HP." },
    { stat: [{ changed: "Attack or Special Attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Solar Power",
    "Boosts the Sp. Atk stat in harsh sunlight, but HP decreases every turn.",
    {
      description: "The weather must be harsh sunlight",
      weather: "harsh sunlight",
    },
    { stat: [{ changed: "Special attack", modifier: 1.5 }] }
  ),
  new Ability("Tough Claws", "Powers up moves that make direct contact.", {
    description: "The Pokémon must be mega evolved.",
  }),
  new Ability(
    "Drought",
    "Turns the sunlight harsh when the Pokémon enters a battle.",
    { description: "The Pokémon must enter the battle." },
    { weather: "harsh sunlight" }
  ),
  new Ability(
    "Torrent",
    "Powers up Water-type moves when the Pokémon's HP is low.",
    { description: "The Pokémon must be at 1/3 or less of its HP." },
    { stat: [{ changed: "Attack or Special Attack", modifier: 1.5 }] }
  ),
  new Ability("Rain Dish", "The Pokémon gradually regains HP in rain.", {
    description: "The weather must be rain.",
    weather: "rain",
  }),
  new Ability("Mega Launcher", "Powers up aura and pulse moves."),
  new Ability(
    "Shield Dust",
    "This Pokémon's dust blocks the additional effects of attacks taken.",
    {
      description:
        "An attacking move with at least 1 additional effect must be used against this Pokémon.",
    }
  ),
  new Ability("Run Away", "Enables a sure getaway from wild Pokémon."),
  new Ability(
    "Shed Skin",
    "The Pokémon may heal its own status conditions by shedding its skin.",
    {
      description:
        "The Pokémon must be in battle and must be affected by a non-volatile status condition.",
      status: "any",
    }
  ),
  new Ability(
    "Compound Eyes",
    "The Pokémon's compound eyes boost its accuracy.",
    undefined,
    { stat: [{ changed: "Accuracy", modifier: 1.3 }] }
  ),
  new Ability(
    "Tinted Lens",
    'The Pokémon can use "not very effective" moves to deal regular damage.',
    {
      description:
        'The Pokémon must use a "not very effective" move against its enemy.',
    }
  ),
  new Ability(
    "Swarm",
    "Powers up Bug-type moves when the Pokémon's HP is low.",
    { description: "The Pokémon must be at 1/3 or less of its HP." },
    { stat: [{ changed: "Attack or Special Attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Sniper",
    "Powers up moves if they become critical hits when attacking.",
    { description: "The move used must be a critical hit." }
  ),
  new Ability(
    "Adaptability",
    "Powers up moves of the same type as the Pokémon.",
    { description: "The move used must be of the same type as The Pokémon's." }
  ),
  new Ability(
    "Keen Eye",
    "Keen eyes prevent other Pokémon from lowering this Pokémon's accuracy.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Tangled Feet",
    "Raises evasiveness if the Pokémon is confused.",
    {
      description: "The Pokémon with this ability must be confused.",
      status: "confusion",
    }
  ),
  new Ability(
    "Big Pecks",
    "Protects the Pokémon from Defense-lowering effects.",
    { description: "A move with defense-lowering effect must be used" }
  ),
  new Ability(
    "No Guard",
    "The Pokémon employs no-guard tactics to ensure incoming and outgoing attacks always land."
  ),
  new Ability(
    "Guts",
    "It's so gutsy that having a status condition boosts the Pokémon's Attack stat.",
    {
      description:
        "The Pokémon must be in battle and must be affected by a non-volatile status condition.",
      status: "any",
    },
    { stat: [{ changed: "Attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Hustle",
    "Boosts the Attack stat, but lowers accuracy.",
    undefined,
    {
      stat: [
        { changed: "Attack", modifier: 1.5 },
        { changed: "Accuracy of physical moves", modifier: 0.2 },
      ],
    }
  ),
  new Ability(
    "Gluttony",
    "Makes the Pokémon eat a held Berry when its HP drops to half or less, which is sooner than usual.",
    { description: "The Pokémon must hold a berry." }
  ),
  new Ability(
    "Intimidate",
    "The Pokémon intimidates opposing Pokémon upon entering battle, lowering their Attack stat.",
    { description: "The Pokémon must be in battle." },
    { stat: [{ changed: "Attack", modifier: 0.75 }] }
  ),
  new Ability(
    "Unnerve",
    "Unnerves opposing Pokémon and makes them unable to eat Berries.",
    {
      description:
        "The Pokémon must be in battle, and the enemy Pokémon must be holding a Berry.",
    }
  ),
  new Ability(
    "Static",
    "The Pokémon is charged with static electricity, so contact with it may cause paralysis.",
    { description: "The enemy Pokémon must use a contact move." }
  ),
  new Ability(
    "Lightning Rod",
    "The Pokémon draws in all Electric-type moves. Instead of being hit by Electric-type moves, it boosts its Sp. Atk.",
    { description: "The enemy Pokémon must use an electric-type move." },
    { stat: [{ changed: "Special attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Surge Surfer",
    "Doubles the Pokémon's Speed stat on Electric Terrain.",
    {
      description: "The terrain must be of electric-type.",
      terrain: "electric",
    },
    { stat: [{ changed: "Speed", modifier: 2 }] }
  ),
  new Ability(
    "Sand Veil",
    "Boosts the Pokémon's evasiveness in a sandstorm.",
    {
      description: "The weather must be sandstorm.",
      weather: "sandstorm",
    },
    { stat: [{ changed: "Evasion", modifier: 4 / 5 }] }
  ),
  new Ability(
    "Sand Rush",
    "Boosts the Pokémon's Speed stat in a sandstorm.",
    {
      description: "The weather must be sandstorm.",
      weather: "sandstorm",
    },
    { stat: [{ changed: "Speed", modifier: 2 }] }
  ),
  new Ability(
    "Snow Cloak",
    "Boosts evasiveness in a hailstorm.",
    {
      description: "The weather must be hailstorm.",
      weather: "hailstorm",
    },
    { stat: [{ changed: "Evasion", modifier: 4 / 5 }] }
  ),
  new Ability(
    "Slush Rush",
    "Boosts the Pokémon's Speed stat in a hailstorm.",
    { description: "The weather must be hailstorm.", weather: "hailstorm" },
    { stat: [{ changed: "Speed", modifier: 2 }] }
  ),
  new Ability(
    "Poison Point",
    "Contact with the Pokémon may poison the attacker.",
    { description: "The enemy Pokémon must use a contact move." }
  ),
  new Ability(
    "Rivalry",
    "Becomes competitive and deals more damage to Pokémon of the same gender, but deals less to Pokémon of the opposite gender.",
    { description: "The Pokémon must be in battle." },
    {
      stat: [
        { changed: "Power", modifier: 1.25 },
        { changed: "Power", modifier: 0.75 },
      ],
    }
  ),
  new Ability(
    "Sheer Force",
    "Removes additional effects to increase the power of moves when attacking.",
    { description: "The Pokémon must be in battle." },
    { stat: [{ changed: "Power", modifier: 1.3 }] }
  ),
  new Ability("Cute Charm", "Contact with the Pokémon may cause infatuation.", {
    description: "The enemy Pokémon must use a contact move.",
  }),
  new Ability("Magic Guard", "The Pokémon only takes damage from attacks.", {
    description: "The Pokémon must be affected by a non-volatile status",
    status: "any",
  }),
  new Ability("Friend Guard", "Reduces damage done to allies.", {
    description: "The battle must be a double-type battle.",
  }),
  new Ability(
    "Unaware",
    "When attacking, the Pokémon ignores the target Pokémon's stat changes.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Flash Fire",
    "Powers up the Pokémon's Fire-type moves if it's hit by one.",
    { description: "The enemy Pokémon must use a fire-type move." },
    { stat: [{ changed: "Power", modifier: 1.5 }] }
  ),
  new Ability(
    "Snow Warning",
    "The Pokémon summons a hailstorm when it enters a battle.",
    { description: "The Pokémon must be in battle." },
    { weather: "hailstorm" }
  ),
  new Ability(
    "Competitive",
    "Boosts the Sp. Atk stat sharply when a stat is lowered.",
    { description: "Any stat of the Pokémon must be lowered" },
    { stat: [{ changed: "Special Attack", modifier: 2 }] }
  ),
  new Ability(
    "Frisk",
    "When it enters a battle, the Pokémon can check an opposing Pokémon's held item.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Inner Focus",
    "The Pokémon's intensely focused, and that protects the Pokémon from flinching."
  ),
  new Ability(
    "Infiltrator",
    "Passes through the opposing Pokémon's barrier, substitute, and the like and strikes.",
    {
      description:
        "The enemy Pokémon must have used any of: Substitute, Refclect, Light Screen, Safeguard or Mist.",
    }
  ),
  new Ability(
    "Stench",
    "By releasing stench when attacking, this Pokémon may cause the target to flinch.",
    { description: "The ookémon must use a damaging move." }
  ),
  new Ability(
    "Effect Spore",
    "Contact with the Pokémon may inflict poison, sleep, or paralysis on its attacker.",
    { description: "The enemy Pokémon must use a contact move." }
  ),
  new Ability(
    "Dry Skin",
    "Restores HP in rain or when hit by Water-type moves. Reduces HP in harsh sunlight, and increases the damage received from Fire-type moves.",
    { description: "The weather must be rain or harsh sunlight." },
    { stat: [{ changed: "Attacker's Power", modifier: 1.25 }] }
  ),
  new Ability(
    "Damp",
    "Prevents the use of explosive moves, such as Self-Destruct, by dampening its surroundings.",
    {
      description:
        "A move used by either one of the 2 Pokémon mus be any of: Self-Destruct, Explosion, Mind Blown or Misty Explosion.",
    }
  ),
  new Ability(
    "Wonder Skin",
    "Makes status moves more likely to miss.",
    { description: "The enemy Pokémon must use a status move." },
    { stat: [{ changed: "Attacker's Accuracy", modifier: 0.5 }] }
  ),
  new Ability("Arena Trap", "Prevents opposing Pokémon from fleeing.", {
    description: "The Pokémon must be in battle.",
  }),
  new Ability(
    "Tangling Hair",
    "Contact with the Pokémon lowers the attacker's Speed stat.",
    { description: "The enemy Pokémon must use a contact move." },
    { stat: [{ changed: "Attacker's Speed", modifier: 0.75 }] }
  ),
  new Ability(
    "Sand Force",
    "Boosts the power of Rock-, Ground-, and Steel-type moves in a sandstorm.",
    { description: "The weather must be sandstorm.", weather: "sandstorm" },
    { stat: [{ changed: "Power", modifier: 1.3 }] }
  ),
  new Ability(
    "Pickup",
    "The Pokémon may pick up the item an opposing Pokémon used during a battle. It may pick up items outside of battle, too.",
    { description: "The enemy Pokémon must have used an item." }
  ),
  new Ability(
    "Technician",
    "Powers up the Pokémon's weaker moves.",
    { description: "The Pokémon must be in battle" },
    { stat: [{ changed: "Power", modifier: 1.5 }] }
  ),
  new Ability(
    "Rattled",
    "Dark-, Ghost-, and Bug-type moves scare the Pokémon and boost its Speed stat.",
    {
      description:
        "The enemy Pokémon must use a Dark-, Ghost- or Bug-type move.",
    },
    { stat: [{ changed: "Speed", modifier: 1.5 }] }
  ),
  new Ability(
    "Limber",
    "Its limber body protects the Pokémon from paralysis.",
    {
      description:
        "The enemy Pokémon must use a move that can or inflicts paralysis.",
    }
  ),
  new Ability("Fur Coat", "Halves the damage from physical moves.", undefined, {
    stat: [{ changed: "Defense", modifier: 2 }],
  }),
  new Ability("Cloud Nine", "Eliminates the effects of weather.", {
    description: "There must be any type of weather.",
    weather: "any",
  }),
  new Ability(
    "Swift Swim",
    "Boosts the Pokémon's Speed stat in rain.",
    { description: "The weather must be rain.", weather: "rain" },
    { stat: [{ changed: "Speed", modifier: 2 }] }
  ),
  new Ability(
    "Vital Spirit",
    "The Pokémon is full of vitality, and that prevents it from falling asleep."
  ),
  new Ability(
    "Anger Point",
    "The Pokémon is angered when it takes a critical hit, and that maxes its Attack stat.",
    { description: "The Pokémon must receive a critical hit." },
    { stat: [{ changed: "Attack", modifier: 4 }] }
  ),
  new Ability(
    "Defiant",
    "Boosts the Pokémon's Attack stat sharply when its stats are lowered.",
    { description: "Ant stat of the Pokémon must be lowered" },
    { stat: [{ changed: "Attack", modifier: 2 }] }
  ),
  new Ability(
    "Justified",
    "Being hit by a Dark-type move boosts the Attack stat of the Pokémon, for justice.",
    { description: "The Pokémon must be hit by a dark-type move." },
    { stat: [{ changed: "Attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Water Absorb",
    "Restores HP if hit by a Water-type move instead of taking damage.",
    { description: "The Pokémon must be hit by a water-type move" }
  ),
  new Ability(
    "Synchronize",
    "The attacker will receive the same status condition if it inflicts a burn, poison, or paralysis to the Pokémon.",
    {
      description: "The Pokémon must be any of: paralyzed, burned or poisoned.",
      status: "Paralysis, Burn or Poison",
    }
  ),
  new Ability(
    "Trace",
    "When it enters a battle, the Pokémon copies an opposing Pokémon's Ability.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Steadfast",
    "The Pokémon's determination boosts the Speed stat each time the Pokémon flinches.",
    { description: "The Pokémon must flinch." },
    { stat: [{ changed: "Speed", modifier: 1.5 }] }
  ),
  new Ability(
    "Clear Body",
    "Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats.",
    {
      description:
        "The enemy Pokémon must use a move or have an ability that lowers any stat.",
    }
  ),
  new Ability(
    "Liquid Ooze",
    "The oozed liquid has a strong stench, which damages attackers using any draining move.",
    { description: "The enemy Pokémon must use a draining move." }
  ),
  new Ability("Rock Head", "Protects the Pokémon from recoil damage.", {
    description: "The Pokémon must use a move that deals recoil damage.",
  }),
  new Ability(
    "Sturdy",
    "It cannot be knocked out with one hit. One-hit KO moves cannot knock it out, either.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Magnet Pull",
    "Prevents Steel-type Pokémon from escaping using its magnetic force.",
    { description: "The enemy Pokémon must be of steel-type." }
  ),
  new Ability(
    "Galvanize",
    "Normal-type moves become Electric-type moves. The power of those moves is boosted a little.",
    undefined,
    { stat: [{ changed: "Power", modifier: 1.2 }] }
  ),
  new Ability("Flame Body", "Contact with the Pokémon may burn the attacker.", {
    description: "The enemy Pokémon must use a contact move.",
  }),
  new Ability(
    "Pastel Veil",
    "Protects the Pokémon and its ally Pokémon from being poisoned.",
    { description: "The battle must be a double-type battle." }
  ),
  new Ability(
    "Anticipation",
    "The Pokémon can sense an opposing Pokémon's dangerous moves.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Oblivious",
    "The Pokémon is oblivious, and that keeps it from being infatuated or falling for taunts",
    {
      description:
        "The Pokémon must receive a taunting or an infatuation effect.",
    }
  ),
  new Ability(
    "Own Tempo",
    "This Pokémon has its own tempo, and that prevents it from becoming confused.",
    { description: "The Pokémon must receive a confusion effect." }
  ),
  new Ability(
    "Regenerator",
    "Restores a little HP when withdrawn from battle.",
    { description: "The Pokémon must be withdrawn from battle." }
  ),
  new Ability("Quick Draw", "Enables the Pokémon to move first occasionally.", {
    description: "The Pokémon must be in battle.",
  }),
  new Ability(
    "Shell Armor",
    "A hard shell protects the Pokémon from critical hits.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Analytic",
    "Boosts move power when the Pokémon moves last.",
    { description: "The Pokémon must move last." },
    { stat: [{ changed: "Power", modifier: 1.3 }] }
  ),
  new Ability(
    "Scrappy",
    "The Pokémon can hit Ghost-type Pokémon with Normal- and Fighting-type moves.",
    { description: "Pokémon must use a normal- or a fighting-type move." }
  ),
  new Ability(
    "Early Bird",
    "The Pokémon awakens from sleep twice as fast as other Pokémon.",
    { description: "The Pokémon must be asleep", status: "Sleep" }
  ),
  new Ability("Hydration", "Heals status conditions if it's raining.", {
    description: "The weather must be rain",
    weather: "rain",
  }),
  new Ability("Ice Body", "The Pokémon gradually regains HP in a hailstorm.", {
    description: "The weather must be hailstorm",
    weather: "hailstorm",
  }),
  new Ability(
    "Sticky Hold",
    "Items held by the Pokémon are stuck fast and cannot be removed by other Pokémon.",
    { description: "The Pokémon must receive an effect that removes its item." }
  ),
  new Ability(
    "Poison Touch",
    "May poison a target when the Pokémon makes contact.",
    { description: "The enemy Pokémon must use a contact move." }
  ),
  new Ability(
    "Power of Alchemy",
    "The Pokémon copies the Ability of a defeated ally.",
    { description: "An ally must be fainted." }
  ),
  new Ability(
    "Skill link",
    "Maximizes the number of times multistrike moves hit.",
    { description: "The Pokémon must use a multistrike move." }
  ),
  new Ability(
    "Overcoat",
    "Protects the Pokémon from things like sand, hail, and powder.",
    {
      description:
        "The weather must be sandstorm or hailstorm, or the Pokémon must receive a powder move.",
      weather: "sandstorm or hailstorm",
    }
  ),
  new Ability(
    "Levitate",
    "By floating in the air, the Pokémon receives full immunity to all Ground-type moves.",
    { description: "The Pokémon must receive a ground-type move." }
  ),
  new Ability("Cursed Body", "May disable a move used on the Pokémon.", {
    description: "The enemy Pokémon must use a damaging move.",
  }),
  new Ability(
    "Shadow Tag",
    "This Pokémon steps on the opposing Pokémon's shadow to prevent it from escaping.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Weak Armor",
    "Physical attacks to the Pokémon lower its Defense stat but sharply raise its Speed stat.",
    { description: "The Pokémon must receive a physical damaging move." },
    {
      stat: [
        { changed: "Defense", modifier: 0.75 },
        { changed: "Speed", modifier: 1.5 },
      ],
    }
  ),
  new Ability(
    "Insomnia",
    "The Pokémon is suffering from insomnia and cannot fall asleep.",
    { description: "The Pokémon must receive a sleep effect." }
  ),
  new Ability(
    "Forewarn",
    "When it enters a battle, the Pokémon can tell one of the moves an opposing Pokémon has.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Hyper Cutter",
    "The Pokémon's proud of its powerful pincers. They prevent other Pokémon from lowering its Attack stat.",
    { description: "The Pokémon must receive an attack-lowering effect." }
  ),
  new Ability(
    "Soundproof",
    "Soundproofing gives the Pokémon full immunity to all sound-based moves.",
    { description: "The Pokémon must receive a sound-based move." }
  ),
  new Ability(
    "Aftermath",
    "Damages the attacker if it contacts the Pokémon with a finishing hit.",
    {
      description:
        "The Pokémon must faint and a Pokémon with Damp must not be in battle.",
    }
  ),
  new Ability("Harvest", "May create another Berry after one is used.", {
    description: "A berry must be used.",
  }),
  new Ability(
    "Battle Armor",
    "Hard armor protects the Pokémon from critical hits.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability("Reckless", "Powers up moves that have recoil damage.", {
    description: "The Pokémon must use a move that inflicts recoil damage.",
  }),
  new Ability(
    "Unburden",
    "Boosts the Speed stat if the Pokémon's held item is used or lost.",
    { description: "The Pokémon must lose or use its held item." }
  ),
  new Ability(
    "Iron Fist",
    "Powers up punching moves.",
    {
      description: "The Pokémon must use a punching move.",
    },
    { stat: [{ changed: "Power", modifier: 1.2 }] }
  ),
  new Ability(
    "Neutralizing Gas",
    "If the Pokémon with Neutralizing Gas is in the battle, the effects of all Pokémon's Abilities will be nullified or will not be triggered.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Misty Surge",
    "Turns the ground into Misty Terrain when the Pokémon enters a battle.",
    { description: "The Pokémon must be in battle." },
    { terrain: "misty" }
  ),
  new Ability(
    "Natural Cure",
    "All status conditions heal when the Pokémon switches out.",
    { description: "The Pokémon must be withdrawn from battle." }
  ),
  new Ability(
    "Serene Grace",
    "Boosts the likelihood of additional effects occurring when attacking.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability("Healer", "Sometimes heals an ally's status condition.", {
    description: "The battle must be a double-type battle.",
  }),
  new Ability("Leaf Guard", "Prevents status conditions in harsh sunlight.", {
    description: "The weather must be harsh sunlight",
    weather: "harsh sunlight",
  }),
  new Ability("Parental Bond", "Parent and child each attacks.", {
    description: "The Pokémon must be mega evolved. ",
  }),
  new Ability(
    "Water Veil",
    "The Pokémon is covered with a water veil, which prevents the Pokémon from getting a burn.",
    { description: "The Pokémon must receive a burning effect." }
  ),
  new Ability(
    "Illuminate",
    "Raises the likelihood of meeting wild Pokémon by illuminating the surroundings."
  ),
  new Ability(
    "Filter",
    "Reduces the power of supereffective attacks taken.",
    {
      description: "The Pokémon must receive a super-effective damaging move.",
    },
    { stat: [{ changed: "Attacker's Power", modifier: 0.75 }] }
  ),
  new Ability(
    "Screen Cleaner",
    "When the Pokémon enters a battle, the effects of Light Screen, Reflect, and Aurora Veil are nullified for both opposing and ally Pokémon.",
    {
      description:
        "Light Screen, Aurora Veil or Reflect must be active when the Pokémon enters the battle.",
    }
  ),
  new Ability(
    "Mold Breaker",
    "Moves can be used on the target regardless of its Abilities.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Moxie",
    "The Pokémon shows moxie, and that boosts the Attack stat after knocking out any Pokémon.",
    { description: "The Pokémon must knock out its enemy." },
    { stat: [{ changed: "Attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Aerilate",
    "Normal-type moves become Flying-type moves. The power of those moves is boosted a little.",
    undefined,
    { stat: [{ changed: "Power", modifier: 1.3 }] }
  ),
  new Ability(
    "Imposter",
    "The Pokémon transforms itself into the Pokémon it's facing.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Volt Absorb",
    "Restores HP if hit by an Electric-type move instead of taking damage.",
    { description: "The Pokémon must receive a damaging electric-type move." }
  ),
  new Ability(
    "Quick Feet",
    "Boosts the Speed stat if the Pokémon has a status condition.",
    {
      description:
        "The Pokémon must be affected by a non-volatile status effect.",
      status: "Any",
    }
  ),
  new Ability(
    "Download",
    "Compares an opposing Pokémon's Defense and Sp. Def stats before raising its own Attack or Sp. Atk stat—whichever will be more effective.",
    { description: "The Pokémon must be in battle." },
    {
      stat: [
        { changed: "Attack", modifier: 1.5 },
        { changed: "Special Attack", modifier: 1.5 },
      ],
    }
  ),
  new Ability(
    "Pressure",
    "By putting pressure on the opposing Pokémon, it raises their PP usage.",
    { description: "The Pokémon must be in battle." }
  ),
  new Ability(
    "Immunity",
    "The immune system of the Pokémon prevents it from getting poisoned.",
    { description: "The Pokémon must receive a poisoning effect." }
  ),
  new Ability(
    "Berserk",
    "Boosts the Pokémon's Sp. Atk stat when it takes a hit that causes its HP to become half or less.",
    { description: "The Pokémon's HP must fall below 50%." },
    { stat: [{ changed: "Special Attack", modifier: 1.5 }] }
  ),
  new Ability(
    "Marvel Scale",
    "The Pokémon's marvelous scales boost the Defense stat if it has a status condition.",
    {
      description:
        "The Pokémon must be affected by a non-volatile status effect.",
      status: "Any",
    },
    { stat: [{ changed: "Speed", modifier: 1.5 }] }
  ),
  new Ability(
    "Multiscale",
    "Reduces the amount of damage the Pokémon takes while its HP is full.",
    { description: "The Pokémon must be at full HP." }
  ),
];

export { Abilities };

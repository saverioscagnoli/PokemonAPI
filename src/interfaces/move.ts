interface IMove {
  name: string;
  type: string;
  category: string;
  in_fight: {
    base_pp: number;
    power: number;
    accuracy: number;
    priority: number;
    crit_rate: number;
    healing: number;
    effect_chance: number;
    multistrike?: {
      min_hits: number;
      max_hits: number;
    };
    multiturn?: {
      min_turns: number;
      max_turns: number;
    };
    stats_changes?: {
      changed: string;
      modifier: number;
    }[];
    status_changes?: {
      status: string;
    };
    additional_effects?: {
      stats_changes?: {
        changed: string;
        modifier: number;
      }[];
      status_changes?: {
        status: string;
      };
    };
  };
}

class Move implements IMove {
  name: string;
  type: string;
  category: string;
  in_fight: {
    base_pp: number;
    power: number;
    accuracy: number;
    priority: number;
    crit_rate: number;
    healing: number;
    effect_chance: number;
    multistrike?: {
      min_hits: number;
      max_hits: number;
    };
    multiturn?: {
      min_turns: number;
      max_turns: number;
    };
    stats_changes?: {
      changed: string;
      modifier: number;
    }[];
    status_changes?: {
      status: string;
    };
    additional_effects?: {
      stats_changes?: {
        changed: string;
        modifier: number;
      }[];
      status_changes?: {
        status: string;
      };
    };
  };
  constructor(
    name: string,
    type: string,
    category: string,
    in_fight: {
      base_pp: number;
      power: number;
      accuracy: number;
      priority: number;
      crit_rate: number;
      healing: number;
      effect_chance: number;
      multistrike?: {
        min_hits: number;
        max_hits: number;
      };
      multiturn?: {
        min_turns: number;
        max_turns: number;
      };
      stats_changes?: {
        changed: string;
        modifier: number;
      }[];
      status_changes?: {
        status: string;
      };
      additional_effects?: {
        stats_changes?: {
          changed: string;
          modifier: number;
        }[];
        status_changes?: {
          status: string;
        };
      };
    }
  ) {
    this.name = name;
    this.type = type;
    this.category = category;
    this.in_fight = in_fight;
  }
}

export { Move };

interface IChanges {
  stat?: {
    changed: string;
    modifier: number;
  }[];
  terrain?: string;
  weather?: string;
}

interface IAbility {
  name: string;
  description: string;
  requirement?: {
    description: string | undefined;
    terrain?: string;
    weather?: string;
  };
  changes?: IChanges;
}

class Ability {
  name: string;
  descriprion: string;
  index: number;
  generation: string;
  constructor(
    name: string,
    description: string,
    index: number,
    generation: string
  ) {
    this.name = name;
    this.descriprion = description;
    this.index = index;
    this.generation = generation;
  }
}

export { IChanges, IAbility, Ability };

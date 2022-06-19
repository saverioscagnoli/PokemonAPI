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

export { Ability };

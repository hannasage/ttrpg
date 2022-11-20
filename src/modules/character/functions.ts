import { Character } from "./models";

type Middleware<T> = (arg: T) => void;
function validate<T>(value: T, ...mw: Middleware<T>[]) {
  mw.forEach((func) => func(value));
}
function validateMany(values: any[], ...mw: Middleware<any>[]) {
  values.forEach((value) => validate(value, ...mw));
}

type SetBasicParams = Partial<Pick<Character, "name" | "race">>;
export class CharacterBuilder {
  character: Character;
  constructor() {
    this.character = {} as Character;
  }

  setBasic({ name, race }: SetBasicParams) {
    validateMany([name, race], (value) => {
      if (value === undefined) {
        throw Error("Character values cannot be undefined");
      }
    });
    this.character.name = name!;
    this.character.race = race!;
  }
  setClass() {}
}

import {EmptyParamError, InvalidParamError, LongNameError} from "./errors";
import { Character, CharacterClass, CharacterRace } from "./models";

// type Middleware<T> = (arg: T) => void;
// function validate<T>(value: T, ...mw: Middleware<T>[]) {
//   mw.forEach((func) => func(value));
// }
// function validateMany(values: any[], ...mw: Middleware<any>[]) {
//   values.forEach((value) => validate(value, ...mw));
// }
/** Creates an empty Character object, and provides public methods to build the character
 *  with input validation and friendly errors.
 */
export class CharacterBuilder {
  readonly character: Partial<Character>;
  /** Initialize undefined level 1 character */
  constructor() {
    this.character = {
      name: undefined,
      race: undefined,
      class: undefined,
      level: 1,
      description: undefined,
      sheet: undefined
    };
  }
  /** Set the character's name with empty string and length validation */
  setName(name: string) {
    if (name.trim() === "") { 
      throw new EmptyParamError(`${this.constructor.name}: name cannot be empty`, "name") 
    } else if (name.length > 48) {
      throw new LongNameError(`${this.constructor.name}: name cannot exceed 48 characters - given ${name.length}`)
    }
    this.character.name = name;
  }
  /** Set the character's race with runtime type check for {@link CharacterRace} */
  setRace(race: CharacterRace) {
    if (!Object.values(CharacterRace).includes(race)) {
      throw new InvalidParamError(`${this.constructor.name}: ${race} is not a valid CharacterRace`, "race");
    }
    this.character.race = race;
  }
  /** Set the character's class with runtime type check for {@link CharacterClass} */
  setClass(cClass: CharacterClass) {
    if (!Object.values(CharacterClass).includes(cClass)) {
      throw new InvalidParamError(`${this.constructor.name}: ${cClass} is not a valid CharacterClass`, "class");
    }
    this.character.class = cClass;
  }
}

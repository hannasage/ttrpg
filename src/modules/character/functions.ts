import {EmptyParamError, InvalidParamError, LongNameError} from "./errors";
import { Character, CharacterClass, CharacterRace } from "./models";

const CHARACTER_BUILDER = "CharacterBuilder"

type Middleware<T> = (arg: T, context: string) => void;
type MiddlewareConfig = Partial<Record<keyof Character, Middleware<any>[]>>

function nameLength(name: string, context: string) {
  if (name.length > 48) {
    throw new LongNameError(`${context}: name cannot exceed 48 characters - given ${name.length}`)
  }
}

function nameEmpty(name: string, context: string) {
  if (name.trim() === "") { 
    throw new EmptyParamError(`${context}: name cannot be empty`, "name") 
  } 
}

function enforceRaceType(race: string, context: string) {
  if (!Object.values(CharacterRace).includes(race as CharacterRace)) {
    throw new InvalidParamError(`${context}: ${race} is not a valid CharacterRace`, "race");
  }
}

function enforceClassType(cClass: string, context: string) {
  if (!Object.values(CharacterClass).includes(cClass as CharacterClass)) {
    throw new InvalidParamError(`${context}: ${cClass} is not a valid CharacterClass`, "class");
  }
}

/** Creates an empty Character object, and provides public methods to build the character
 *  with input validation and friendly errors.
 */
export class CharacterBuilder {
  private readonly validators: MiddlewareConfig;
  private readonly character: Partial<Character>;
  /** Initialize undefined level 1 character */
  constructor() {
    this.validators = {
      name: [nameLength, nameEmpty],
      race: [enforceRaceType],
      cClass: [enforceClassType]
    }
    this.character = {
      name: undefined,
      race: undefined,
      cClass: undefined,
      level: 1,
      description: undefined,
      sheet: undefined
    };
  }
  /** Returns the current state of character in progress */
  getInProgress() { return this.character }
  /** Set the character's name with empty string and length validation */
  setName(name: string) { this.setAttr("name", name) }
  /** Set the character's race with runtime type check for {@link CharacterRace} */
  setRace(race: CharacterRace) { this.setAttr("race", race) }
  /** Set the character's class with runtime type check for {@link CharacterClass} */
  setClass(cClass: CharacterClass) { this.setAttr("cClass", cClass) }
  /** Validates and applies an attribute to a character in progress */
  private setAttr(attr: keyof Character, arg: any) {
    if (this.validate(attr, arg)) {
      this.character[attr] = arg;
    } else {
      console.error(`Character ${attr} could not be updated`)
    }
  }
  /** Validates the given args against the attribute's validator functions */
  private validate(attr: keyof Character, ...args: any[]) {
    const validator = this.validators?.[attr]
    if (!!validator) {
      validator.forEach((func) => args.forEach((arg) => func(arg, CHARACTER_BUILDER)));
      return true;
    } else {
      console.error(`Validators for ${attr} not provided for CharacterBuilder.validate`)
      return false;
    }
  }
}

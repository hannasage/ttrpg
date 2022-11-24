import {EmptyParamError, InvalidParamError, LongNameError} from "./errors";
import { Character, CharacterClass, CharacterRace } from "./models";
import {BuilderWithMiddleware, MiddlewareConfig} from "../../utils/builderWithMiddleware";

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

const characterValidators: MiddlewareConfig<Character> = {
  name: [nameLength, nameEmpty],
  race: [enforceRaceType],
  cClass: [enforceClassType]
}
const characterBaseline: Partial<Character> = {
        name: undefined,
        race: undefined,
        cClass: undefined,
        level: 1,
        description: undefined,
        sheet: undefined
      }
/** Creates an empty Character object, and provides public methods to build the character
 *  with input validation and friendly errors.
 */
export class CharacterBuilder extends BuilderWithMiddleware<Character> {
  constructor() {
    super({
      baseline: characterBaseline,
      validators: characterValidators
    })
  }
  /** Set the character's name with empty string and length validation */
  setName(name: string) { this.setAttr("name", name) }
  /** Set the character's race with runtime type check for {@link CharacterRace} */
  setRace(race: CharacterRace) { this.setAttr("race", race) }
  /** Set the character's class with runtime type check for {@link CharacterClass} */
  setClass(cClass: CharacterClass) { this.setAttr("cClass", cClass) }
}
